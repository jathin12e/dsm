import AnimatedSection from './AnimatedSection.jsx';

/**
 * Consistent section header: eyebrow label, heading and optional subtitle/description.
 * Pass `id` so the parent <section> can reference it with aria-labelledby.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  description,
  align = 'left',
  level = 2,
  light = false,
  className = '',
}) {
  const Heading = `h${level}`;
  return (
    <AnimatedSection
      className={`section-heading section-heading--${align}${light ? ' section-heading--light' : ''} ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading id={id} className="section-heading__title">
        {title}
      </Heading>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      {description && <p className="section-heading__description">{description}</p>}
    </AnimatedSection>
  );
}
