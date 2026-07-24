import React, { Fragment, useEffect, useState, type ReactNode } from 'react';
import { getPost, getPostContent, getPublishedPosts, type BlogPost, type NotionSection } from '@legacy/src/services/notion';
import { BLOG_MESSAGES, LITERARY_REVIEWS_MESSAGES, type BlogMessages } from '@legacy/i18n/blogMessages';
import type { Locale } from '../data/site';

type Props = { locale: Locale; section: NotionSection; mode: 'list' | 'detail' };
type Block = { id: string; type: string; has_children?: boolean; children?: Block[]; [key: string]: any };
type RichText = { plain_text?: string; href?: string | null; annotations?: Record<string, boolean | string>; text?: { link?: { url?: string } | null } };
const sectionPath = (section: NotionSection) => section === 'reviews' ? 'resenas-literarias' : 'blog';
const postPath = (locale: Locale, section: NotionSection, id: string) => `/${locale}/${sectionPath(section)}/${id}/`;
const messagesFor = (locale: Locale, section: NotionSection) => section === 'reviews' ? LITERARY_REVIEWS_MESSAGES[locale] : BLOG_MESSAGES[locale];
const postIdFromLocation = () => new URLSearchParams(window.location.search).get('id') || window.location.pathname.split('/').filter(Boolean).at(-1) || '';

const richText = (items: RichText[] = []): ReactNode => items.map((item, index) => {
  const annotation = item.annotations ?? {}; let node: ReactNode = <>{(item.plain_text ?? '').split('\n').map((line, lineIndex, lines) => <Fragment key={lineIndex}>{line}{lineIndex < lines.length - 1 && <br />}</Fragment>)}</>;
  if (annotation.bold) node = <strong>{node}</strong>; if (annotation.italic) node = <em>{node}</em>; if (annotation.strikethrough) node = <s>{node}</s>; if (annotation.underline) node = <u>{node}</u>; if (annotation.code) node = <code>{node}</code>;
  const href = item.href || item.text?.link?.url; return <Fragment key={index}>{href ? <a href={href} rel="noreferrer">{node}</a> : node}</Fragment>;
});
const blockText = (block: Block): RichText[] => block[block.type]?.rich_text ?? [];
const plainText = (items: RichText[] = []) => items.map((item) => item.plain_text ?? '').join('');
const youtubeEmbed = (url: string) => { try { const parsed = new URL(url); const host = parsed.hostname.replace(/^(www\.|m\.)/, ''); let id = host === 'youtu.be' ? parsed.pathname.split('/').filter(Boolean)[0] : parsed.searchParams.get('v') || parsed.pathname.match(/\/(?:shorts|live|embed)\/([^/?]+)/)?.[1]; return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null; } catch { return null; } };
const poetry = (text: string) => { const lines = text.split('\n').filter((line) => line.trim()); return lines.length > 1 && (lines.reduce((sum, line) => sum + line.trim().length, 0) / lines.length <= 42 || text.includes('\n\n')); };
const imageUrl = (value: any) => value?.file?.url || value?.external?.url || '';
const filterSummary = (locale: Locale, section: NotionSection, count: number, tags: string[]) => {
  const singular = section === 'reviews'
    ? (locale === 'fr' ? 'critique affichée' : 'reseña')
    : (locale === 'fr' ? 'publication affichée' : 'publicación');
  const plural = section === 'reviews'
    ? (locale === 'fr' ? 'critiques affichées' : 'reseñas')
    : (locale === 'fr' ? 'publications affichées' : 'publicaciones');
  const base = locale === 'fr' ? `${count} ${count === 1 ? singular : plural}` : `Mostrando ${count} ${count === 1 ? singular : plural}`;
  if (!tags.length) return base;
  return locale === 'fr' ? `${base} pour ${tags.join(' ou ')}` : `${base} de ${tags.join(' o ')}`;
};

const BlockView = ({ block, messages, section }: { block: Block; messages: BlogMessages; section: NotionSection }) => {
  const textItems = blockText(block); const text = plainText(textItems); const value = block[block.type];
  switch (block.type) {
    case 'heading_1': return <h2 className="notion-h1">{richText(textItems)}</h2>;
    case 'heading_2': return <h2 className="notion-h2">{richText(textItems)}</h2>;
    case 'heading_3': return <h3 className="notion-h3">{richText(textItems)}</h3>;
    case 'paragraph': return text.trim() ? <p className={poetry(text) ? 'notion-poem' : undefined}>{richText(textItems)}</p> : <div className="notion-space" aria-hidden="true" />;
    case 'quote': return <blockquote>{richText(textItems)}</blockquote>;
    case 'callout': return <aside className="notion-callout">{richText(textItems)}</aside>;
    case 'divider': return <hr />;
    case 'column_list': return <div className={`notion-columns columns-${block.children?.length ?? 1}`}><Blocks blocks={block.children ?? []} messages={messages} section={section} /></div>;
    case 'column': return <div className="notion-column"><Blocks blocks={block.children ?? []} messages={messages} section={section} /></div>;
    case 'image': { const src = imageUrl(value); if (!src) return null; const caption = plainText(value?.caption ?? []); return <figure className="notion-image"><picture><source media="(max-width: 720px)" srcSet={`/notion-proxy.php?action=getImage&blockId=${block.id}&width=640&section=${section}`} /><img src={src} alt={caption || `${messages.imageAltPrefix} ${block.id}`} loading="lazy" /></picture>{caption && <figcaption>{richText(value.caption)}</figcaption>}</figure>; }
    case 'video': { const src = imageUrl(value); if (!src) return null; const embed = value?.type === 'external' ? youtubeEmbed(src) : null; return <figure className="notion-video">{embed ? <iframe src={embed} title="Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <video src={src} controls />}{value?.caption?.length ? <figcaption>{richText(value.caption)}</figcaption> : null}</figure>; }
    case 'code': return <pre><code>{text}</code></pre>;
    default: return text.trim() ? <p>{richText(textItems)}</p> : null;
  }
};
const Blocks = ({ blocks, messages, section }: { blocks: Block[]; messages: BlogMessages; section: NotionSection }) => { const output: ReactNode[] = []; for (let index = 0; index < blocks.length; index++) { const block = blocks[index]; if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') { const kind = block.type; const items = [block]; while (blocks[index + 1]?.type === kind) items.push(blocks[++index]); const Tag = kind === 'bulleted_list_item' ? 'ul' : 'ol'; output.push(<Tag key={block.id}>{items.map((item) => <li key={item.id}>{richText(blockText(item))}</li>)}</Tag>); } else output.push(<BlockView key={block.id} block={block} messages={messages} section={section} />); } return <>{output}</>; };

const JournalList = ({ locale, section }: Omit<Props, 'mode'>) => {
  const messages = messagesFor(locale, section); const [posts, setPosts] = useState<BlogPost[]>([]); const [loading, setLoading] = useState(true); const [activeTags, setActiveTags] = useState<string[]>([]);
  useEffect(() => { setLoading(true); getPublishedPosts(locale, section).then(setPosts).finally(() => setLoading(false)); }, [locale, section]);
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort((a, b) => a.localeCompare(b, locale));
  const visible = activeTags.length ? posts.filter((post) => post.tags.some((tag) => activeTags.includes(tag))) : posts;
  const toggleTag = (tag: string) => setActiveTags((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]);
  if (loading) return <div className="journal-loading" aria-live="polite"><span></span><p>{locale === 'es' ? 'Cargando publicaciones' : 'Chargement des publications'}</p></div>;
  return <>{tags.length > 0 && <section className="journal-filter-panel" aria-label={messages.filterLabel}>
    <div className="journal-filter-heading">
      <h2><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4" /></svg>{messages.filterLabel}</h2>
      {activeTags.length > 0 && <button type="button" className="journal-clear-filters" onClick={() => setActiveTags([])}>{messages.clearFilters}</button>}
    </div>
    <div className="journal-tags" role="group" aria-label={messages.filterLabel}>
      <button type="button" className={activeTags.length === 0 ? 'active' : ''} aria-pressed={activeTags.length === 0} onClick={() => setActiveTags([])}>{messages.allTags}</button>
      {tags.map((item) => <button type="button" key={item} className={activeTags.includes(item) ? 'active' : ''} aria-pressed={activeTags.includes(item)} onClick={() => toggleTag(item)}>{item}</button>)}
    </div>
    <p className="journal-filter-summary" aria-live="polite">{filterSummary(locale, section, visible.length, activeTags)}</p>
  </section>}
  {visible.length ? <div className="journal-grid">{visible.map((post) => <article key={post.id}>{post.coverImage ? <a className="journal-cover" href={postPath(locale, section, post.id)}><picture><source media="(max-width: 720px)" srcSet={`/notion-proxy.php?action=getImage&pageId=${post.id}&width=640&section=${section}`} /><img src={post.coverImage} alt={post.title} loading="lazy" /></picture></a> : <a className="journal-cover placeholder" href={postPath(locale, section, post.id)}>BJ</a>}<div>{post.tags.length > 0 && <p className="journal-card-tags">{post.tags.map((item) => <button type="button" key={item} className={activeTags.includes(item) ? 'active' : ''} aria-pressed={activeTags.includes(item)} onClick={() => toggleTag(item)}>{item}</button>)}</p>}<time dateTime={post.date}>{new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</time><h2><a href={postPath(locale, section, post.id)}>{post.title}</a></h2><a className="text-link" href={postPath(locale, section, post.id)}>{messages.readMore} →</a></div></article>)}</div> : <p className="journal-empty">{posts.length ? messages.noTaggedArticles : messages.noArticles}</p>}</>;
};

const JournalDetail = ({ locale, section }: Omit<Props, 'mode'>) => {
  const messages = messagesFor(locale, section); const [post, setPost] = useState<BlogPost | null>(null); const [blocks, setBlocks] = useState<Block[]>([]); const [loading, setLoading] = useState(true);
  useEffect(() => { const id = postIdFromLocation(); if (!/^[a-f0-9-]{32,36}$/i.test(id)) { setLoading(false); return; } Promise.all([getPost(id, locale, section), getPostContent(id)]).then(([entry, content]) => { setPost(entry); setBlocks(content); if (entry) { document.title = `${entry.title} | Belén Juárez`; const canonical = `https://belenjuarez.com/${locale}/${sectionPath(section)}/${id}/`; document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonical); document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', entry.title); } }).finally(() => setLoading(false)); }, [locale, section]);
  if (loading) return <div className="journal-loading"><span></span><p>{locale === 'es' ? 'Cargando artículo' : 'Chargement de l’article'}</p></div>;
  if (!post && !blocks.length) return <div className="journal-empty"><h1>{messages.articleNotFound}</h1><a href={`/${locale}/${sectionPath(section)}/`}>{messages.backToBlog}</a></div>;
  return <article className="journal-detail"><a className="detail-back" href={`/${locale}/${sectionPath(section)}/`}>← {messages.backToIndex}</a><header><time dateTime={post?.date}>{post?.date ? new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'es-ES', { day: 'numeric', month: 'long', year: 'numeric' }) : messages.unknownDate}</time><h1>{post?.title}</h1></header>{post?.coverImage && <figure className="journal-detail-cover"><picture><source media="(max-width: 720px)" srcSet={`/notion-proxy.php?action=getImage&pageId=${post.id}&width=960&section=${section}`} /><img src={post.coverImage} alt={post.title} /></picture></figure>}<div className="notion-content"><Blocks blocks={blocks} messages={messages} section={section} /></div></article>;
};

export default function NotionJournal({ locale, section, mode }: Props) { return mode === 'list' ? <JournalList locale={locale} section={section} /> : <JournalDetail locale={locale} section={section} />; }
