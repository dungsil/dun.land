export interface IconProps {
  icon: string;
  size?: number;
}

export default function Icon({ icon, size = 5 }: IconProps) {
  const sizePx = size * 4; // 4px grid

  return (
    <span class='iconify' data-icon={icon} data-width={sizePx} data-heigt={sizePx} aria-hidden={true} />
  );
}
