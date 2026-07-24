from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "estudio-economico-web-2026.pdf"


def euro(value: str) -> str:
    return value


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="TitleCustom",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=colors.HexColor("#1f2937"),
            alignment=TA_CENTER,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SubtitleCustom",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=14,
            textColor=colors.HexColor("#6b7280"),
            alignment=TA_CENTER,
            spaceAfter=18,
        )
    )
    styles.add(
        ParagraphStyle(
            name="HeadingCustom",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=18,
            textColor=colors.HexColor("#7a1f1f"),
            spaceBefore=8,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodyCustom",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10,
            leading=14,
            alignment=TA_JUSTIFY,
            textColor=colors.HexColor("#1f2937"),
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BulletCustom",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10,
            leading=13,
            alignment=TA_LEFT,
            leftIndent=12,
            bulletIndent=0,
            textColor=colors.HexColor("#1f2937"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="HighlightCustom",
            parent=styles["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=16,
            alignment=TA_CENTER,
            textColor=colors.white,
            spaceAfter=0,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SmallCustom",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#4b5563"),
            spaceAfter=3,
        )
    )
    return styles


def section_title(text, styles):
    return Paragraph(text, styles["HeadingCustom"])


def bullet(text, styles):
    return Paragraph(text, styles["BulletCustom"], bulletText="•")


def money_box(text, styles):
    table = Table([[Paragraph(text, styles["HighlightCustom"])]], colWidths=[170 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#7a1f1f")),
                ("BOX", (0, 0), (-1, -1), 0.75, colors.HexColor("#7a1f1f")),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return table


def hours_table(styles):
    rows = [
        ["Concepto", "Horas", "Tarifa media", "Subtotal"],
        ["Briefing, alcance y planificación", "10", "42 €/h", "420 €"],
        ["Arquitectura de información", "18", "45 €/h", "810 €"],
        ["Diseño UX/UI y responsive", "24", "48 €/h", "1.152 €"],
        ["Sistema de componentes y base visual", "46", "52 €/h", "2.392 €"],
        ["Desarrollo de secciones y detalle", "62", "54 €/h", "3.348 €"],
        ["Integración de contenidos, imágenes y PDFs", "30", "42 €/h", "1.260 €"],
        ["Blog, Notion, proxy y formularios", "16", "54 €/h", "864 €"],
        ["SEO técnico, rendimiento y accesibilidad", "14", "48 €/h", "672 €"],
        ["QA, correcciones y pre-lanzamiento", "14", "42 €/h", "588 €"],
        ["Despliegue, documentación y puesta en marcha", "8", "40 €/h", "320 €"],
        ["Gestión de proyecto y revisiones", "18", "42 €/h", "756 €"],
        ["TOTAL ESTIMADO", "260", "", "12.582 €"],
    ]
    table = Table(rows, colWidths=[86 * mm, 18 * mm, 28 * mm, 28 * mm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f2937")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("LEADING", (0, 0), (-1, -1), 10),
                ("BACKGROUND", (0, 1), (-1, -2), colors.HexColor("#f9fafb")),
                ("ROWBACKGROUNDS", (0, 1), (-1, -2), [colors.white, colors.HexColor("#f3f4f6")]),
                ("FONTNAME", (0, 1), (-1, -2), "Helvetica"),
                ("FONTNAME", (0, -1), (-1, -1), "Helvetica-Bold"),
                ("BACKGROUND", (0, -1), (-1, -1), colors.HexColor("#efe2e2")),
                ("ALIGN", (1, 1), (-1, -1), "CENTER"),
                ("ALIGN", (0, 0), (0, -1), "LEFT"),
                ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#d1d5db")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return table


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=16 * mm,
        title="Estudio economico web 2026",
        author="Codex",
    )

    story = []
    story.append(Spacer(1, 18 * mm))
    story.append(Paragraph("Estudio económico y propuesta de presupuesto", styles["TitleCustom"]))
    story.append(
        Paragraph(
            "Web de autora Belen Juarez | Mercado España 2026 | Documento de entrega",
            styles["SubtitleCustom"],
        )
    )
    story.append(money_box("Presupuesto recomendado: 12.500 € + IVA", styles))
    story.append(Spacer(1, 8 * mm))
    story.append(
        Paragraph(
            "Fecha de emisión: 18 de marzo de 2026",
            styles["SubtitleCustom"],
        )
    )

    story.append(section_title("1. Resumen ejecutivo", styles))
    story.append(
        Paragraph(
            "Tras revisar el proyecto actual, la web analizada se sitúa por encima de una web corporativa estándar. "
            "Combina archivo editorial, portfolio artístico, páginas de detalle, blog conectado a Notion y una carga "
            "alta de activos multimedia. En el mercado español de 2026, este alcance debe presupuestarse como web "
            "cultural a medida y no como sitio básico de presencia online.",
            styles["BodyCustom"],
        )
    )
    story.extend(
        [
            bullet("34 rutas declaradas en la aplicación.", styles),
            bullet("41 archivos de página.", styles),
            bullet("207 imágenes publicadas en la librería del proyecto.", styles),
            bullet("6 documentos PDF descargables.", styles),
            bullet("Blog con integración a Notion y proxy propio.", styles),
        ]
    )
    story.append(Spacer(1, 4 * mm))
    story.append(
        KeepTogether(
            [
                money_box("Rango de mercado razonable: 9.500 € a 18.000 € + IVA", styles),
                Spacer(1, 3 * mm),
                Paragraph(
                    "Posicionamiento recomendado para presentar al cliente: 12.500 € + IVA, con un suelo de negociación "
                    "aconsejado de 10.800 € + IVA.",
                    styles["BodyCustom"],
                ),
            ]
        )
    )

    story.append(section_title("2. Referencias de mercado", styles))
    story.append(
        Paragraph(
            "Las referencias consultadas entre junio de 2025 y febrero de 2026 muestran un mercado claramente "
            "escalonado. Una web corporativa completa de 8 a 15 páginas se mueve de forma habitual entre 2.000 € y "
            "5.000 €, mientras que una web premium de 15 o más páginas se sitúa entre 4.000 € y 10.000 €. "
            "Los proyectos con más estructura, curación de contenidos y desarrollo a medida superan esos rangos.",
            styles["BodyCustom"],
        )
    )
    story.extend(
        [
            bullet("Diseño web para empresas: 2.000 € a 6.000 € como rango nacional habitual, con casos hasta 20.000 €.", styles),
            bullet("Mantenimiento web: 50 € a 300 €/mes como referencia recurrente de mercado.", styles),
            bullet("Planes de mantenimiento de entrada publicados en 2026 desde 29,90 €/mes y 49,90 €/mes con hosting.", styles),
            bullet("Hosting profesional compartido: aproximadamente 65 € a 192 €/año antes de promociones.", styles),
            bullet("Referencia institucional por hora: diseño 40 €/h, desarrollo 45 €/h, UX 40 a 60 €/h, coordinación 35 a 40 €/h, antes de IVA.", styles),
            bullet("Referencia alta especialista: freelancermap 2025 recoge 92 €/h en desarrollo software y 76 €/h en diseño, contenido y media.", styles),
        ]
    )
    story.append(
        Paragraph(
            "La lectura correcta es que la web de Belen Juarez no debe compararse con una landing o una WordPress "
            "estándar. El peso del archivo, la cantidad de páginas de detalle y la integración de contenidos elevan "
            "las horas de trabajo reales.",
            styles["BodyCustom"],
        )
    )

    story.append(section_title("3. Desglose de horas y conceptos", styles))
    story.append(hours_table(styles))
    story.append(Spacer(1, 5 * mm))
    story.append(
        Paragraph(
            "El total técnico estimado asciende a 12.582 €. Comercialmente conviene redondear la cifra y presentar "
            "un precio cerrado de 12.500 € + IVA, que resulta más limpio y más defendible en propuesta.",
            styles["BodyCustom"],
        )
    )

    story.append(section_title("4. Qué incluiría el presupuesto", styles))
    story.extend(
        [
            bullet("Definición de estructura y navegación.", styles),
            bullet("Diseño y adaptación visual responsive.", styles),
            bullet("Maquetación y desarrollo frontend.", styles),
            bullet("Integración de contenidos facilitados por la clienta.", styles),
            bullet("Configuración del blog conectado a Notion.", styles),
            bullet("Optimización básica de rendimiento y SEO técnico.", styles),
            bullet("Pruebas en escritorio y móvil.", styles),
            bullet("Publicación final y entrega de uso.", styles),
        ]
    )

    story.append(section_title("5. Partidas que conviene presupuestar aparte", styles))
    story.extend(
        [
            bullet("Copywriting o redacción profesional.", styles),
            bullet("Traducciones.", styles),
            bullet("Fotografía, vídeo o retoque profesional.", styles),
            bullet("SEO mensual o estrategia de posicionamiento continuada.", styles),
            bullet("Carga masiva adicional de contenidos.", styles),
            bullet("Funcionalidades nuevas fuera del alcance inicial.", styles),
            bullet("Mantenimiento evolutivo tras el lanzamiento.", styles),
        ]
    )

    story.append(PageBreak())
    story.append(section_title("6. Costes recurrentes recomendables", styles))
    story.append(
        Paragraph(
            "Para no infravalorar el soporte posterior, la recomendación comercial es separar claramente la fase de "
            "desarrollo del mantenimiento mensual y de la infraestructura anual.",
            styles["BodyCustom"],
        )
    )
    recurring = Table(
        [
            ["Partida", "Rango recomendado"],
            ["Mantenimiento básico", "90 € a 150 €/mes + IVA"],
            ["Mantenimiento activo con pequeñas mejoras", "150 € a 250 €/mes + IVA"],
            ["Dominio", "10 € a 25 €/año"],
            ["Hosting profesional", "80 € a 200 €/año"],
            ["Dominio + hosting", "90 € a 225 €/año"],
        ],
        colWidths=[95 * mm, 75 * mm],
    )
    recurring.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f2937")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f9fafb")]),
                ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#d1d5db")),
                ("FONTSIZE", (0, 0), (-1, -1), 9),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.append(recurring)

    story.append(section_title("7. Estrategia de presentación al cliente", styles))
    story.append(
        Paragraph(
            "La mejor formulación comercial es presentar una cifra cerrada y separar claramente cualquier trabajo "
            "extraordinario. También conviene proponer hitos de pago sencillos.",
            styles["BodyCustom"],
        )
    )
    story.extend(
        [
            bullet("Presupuesto a presentar: 12.500 € + IVA.", styles),
            bullet("Primera cesión razonable si el cliente negocia: 11.800 € + IVA.", styles),
            bullet("Límite aconsejable para no devaluar el proyecto: 10.800 € + IVA.", styles),
            bullet("Forma de pago sugerida: 40 % a la aceptación, 30 % a mitad, 30 % a la entrega.", styles),
        ]
    )
    story.append(money_box("Cifra final más defendible para este proyecto: 12.500 € + IVA", styles))

    story.append(section_title("8. Texto breve listo para enviar", styles))
    story.append(
        Paragraph(
            "Presupuesto estimado para el desarrollo integral de la web, incluyendo definición de estructura, diseño "
            "responsive, desarrollo técnico, integración de contenidos, optimización básica, pruebas y puesta en "
            "marcha: <b>12.500 € + IVA</b>.",
            styles["BodyCustom"],
        )
    )
    story.append(
        Paragraph(
            "El importe se calcula en base al alcance real del proyecto, que incluye una arquitectura editorial amplia, "
            "numerosas secciones y páginas de detalle, integración de contenidos multimedia y necesidades de ajuste "
            "visual y técnico por encima de una web corporativa estándar.",
            styles["BodyCustom"],
        )
    )
    story.append(
        Paragraph(
            "No se incluyen en esta cifra servicios extraordinarios de copywriting, traducción, SEO mensual, campañas, "
            "mantenimiento evolutivo ni carga adicional de contenidos fuera del alcance definido.",
            styles["BodyCustom"],
        )
    )

    story.append(section_title("9. Fuentes consultadas", styles))
    sources = [
        "Cronoshare. ¿Cuánto cuesta diseñar una página web? Precios en 2026.",
        "Cronoshare. ¿Cuánto cuesta el diseño web para empresas? Precios en 2026.",
        "Cronoshare. Mantenimiento Web | Presupuestos.",
        "Ankaa Studio. Precio mantenimiento web 2026.",
        "Opiniones.hosting. Comparativa de precios de hosting actualizada el 16 de febrero de 2026.",
        "Opiniones.hosting. TOP hosting España 2026.",
        "Plataforma de Contratación del Sector Público. Acta con precios hora de diseño, desarrollo, UX y coordinación.",
        "freelancermap. Índice freelance 2025.",
    ]
    for item in sources:
        story.append(bullet(item, styles))

    story.append(Spacer(1, 4 * mm))
    story.append(
        Paragraph(
            "Criterio final: si el objetivo es cobrar a mercado en España en 2026 sin quedarse corto, la cifra más "
            "defendible para este proyecto es <b>12.500 € + IVA</b>.",
            styles["BodyCustom"],
        )
    )

    def add_page_number(canvas, _doc):
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#6b7280"))
        canvas.drawRightString(A4[0] - 18 * mm, 10 * mm, f"Página {canvas.getPageNumber()}")

    doc.build(story, onFirstPage=add_page_number, onLaterPages=add_page_number)


if __name__ == "__main__":
    build_pdf()
