const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

export const formatLiteraryLine = (value: string) => {
  let safe = escapeHtml(value);
  safe = safe.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  safe = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  safe = safe.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  safe = safe.replace(/_(.+?)_/g, '<em>$1</em>');
  return safe;
};

export const parseLiteraryParagraph = (paragraph: string) => {
  const images = [...paragraph.matchAll(/\[\[IMG:(L|R|BR|B):(\d+)\]\]/g)].map((match) => ({
    position: match[1] as 'L' | 'R' | 'BR' | 'B', index: Number.parseInt(match[2], 10),
  }));
  const cleanText = paragraph.replace(/\[\[IMG:(?:L|R|BR|B):\d+\]\]/g, '').trimEnd();
  const lines = cleanText.split('\n').map((line) => {
    const doubleIndented = line.match(/^\s*>>>\s*(.*)$/);
    const centered = doubleIndented ? null : line.match(/^\s*>>\s*(.*)$/);
    const indented = doubleIndented || centered ? null : line.match(/^\s*>\s*(.*)$/);
    const text = doubleIndented?.[1] ?? centered?.[1] ?? indented?.[1] ?? line;
    return { html: formatLiteraryLine(text), empty: text.trim() === '', mode: doubleIndented ? 'double-indent' : centered ? 'centered' : indented ? 'indented' : 'normal' };
  });
  return { lines, images };
};
