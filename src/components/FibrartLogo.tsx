interface FibrartLogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export default function FibrartLogo({ className = '', variant = 'default' }: FibrartLogoProps) {
  const src = variant === 'white'
    ? '/Logo_letras_brancas_F_azul_sem_fundo.png'
    : '/Logo_FIBRART.png';

  return (
    <img
      src={src}
      alt="FIBRART — Tanques & Pias"
      className={`h-10 md:h-11 w-auto object-contain ${className}`}
    />
  );
}
