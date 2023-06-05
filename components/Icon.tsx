export interface IconProps {
  icon: string;
}

export default function Icon({ icon }: IconProps) {
  return (
    <span class='iconify' data-icon={icon} aria-hidden={true} />
  );
}
