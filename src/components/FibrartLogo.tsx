import React from 'react';

interface FibrartLogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

export const FibrartLogo: React.FC<FibrartLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'color',
}) => {
  const base = import.meta.env.BASE_URL;
  const logoFile =
    variant === 'white'
      ? 'Logo_letras_brancas_F_azul_sem_fundo.png'
      : 'Logo_FIBRART.png';

  return (
    <img
      src={`${base}${logoFile}`}
      alt="Fibrart Tanques e Pias"
      className={`${className} object-contain`}
      loading="eager"
    />
  );
};

export default FibrartLogo;
