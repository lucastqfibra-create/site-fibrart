export interface Product {
  id: string;
  name: string;
  category: 'pia' | 'tanque' | 'lavatorio';
  material: string;
  dimensions: string;
  colors: string[];
  description: string;
  features: string[];
  image: string;
}

const DEFAULT_COLORS = [
  'Branco Liso',
  'Preto Aracruz',
  'Cinza Andorinha',
  'Bege Bahia',
];

export const products: Product[] = [
  // ==================== PIAS ====================
  {
    id: 'pia-100-50',
    name: 'Pia de Marmofibra 1,00 x 0,50 m',
    category: 'pia',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,00 x 0,50 m',
    colors: DEFAULT_COLORS,
    description: 'Pia compacta e robusta em marmofibra de alta durabilidade com acabamento em Gel Coat de formulação exclusiva. Superfície frontal lisa, não porosa e higiênica.',
    features: [
      'Superfície lisa livre de porosidade',
      'Alta resistência ao impacto e flexibilidade',
      'Pintura em Gel Coat de alto padrão',
      'Fácil higienização e manutenção',
    ],
    image: '/products/pia-100-50.png',
  },
  {
    id: 'pia-120-50',
    name: 'Pia de Marmofibra 1,20 x 0,50 m',
    category: 'pia',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,20 x 0,50 m',
    colors: DEFAULT_COLORS,
    description: 'Pia tradicional de 1,20m de comprimento. Proporciona excelente área de bancada e cuba com escoamento eficiente.',
    features: [
      'Excelente custo-benefício',
      'Revestimento reforçado em fibra de vidro',
      'Acabamento brilhante e resistente a manchas',
      'Ideal para cozinhas residenciais',
    ],
    image: '/products/pia-120-50.png',
  },
  {
    id: 'pia-120-55-gb',
    name: 'Pia para Gabinete 1,20 x 0,55 m',
    category: 'pia',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,20 x 0,55 m',
    colors: DEFAULT_COLORS,
    description: 'Modelo com 55 cm de profundidade projetado sob medida para encaixe em gabinetes e balcões modulados padrão.',
    features: [
      'Dimensão compatível com gabinetes padrão (GB)',
      'Estrutura reforçada',
      'Gel Coat exclusivo resistente ao calor e riscos leves',
      'Design moderno com bordas anti-respingo',
    ],
    image: '/products/pia-120-55-gb.png',
  },
  {
    id: 'pia-140-55-gb',
    name: 'Pia para Gabinete 1,40 x 0,55 m',
    category: 'pia',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,40 x 0,55 m',
    colors: DEFAULT_COLORS,
    description: 'Pia ampla de 1,40m com área de trabalho estendida para preparo de alimentos e escorredor integrado.',
    features: [
      'Espaço ampliado para bancada',
      'Compatível com gabinetes de 1,40 m',
      'Resistência estrutural com manta de fibra',
      'Cores elegantes com visual de pedra natural',
    ],
    image: '/products/pia-140-55-gb.png',
  },
  {
    id: 'pia-150-55-gb',
    name: 'Pia para Gabinete 1,50 x 0,55 m',
    category: 'pia',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,50 x 0,55 m',
    colors: DEFAULT_COLORS,
    description: 'Maior tamanho da linha com cuba de marmofibra, proporcionando máxima comodidade e sofisticação para cozinhas espaçosas.',
    features: [
      'Comprimento de 1,50 m para grande bancada',
      'Encaixe perfeito em gabinetes modulados',
      'Durabilidade comprovada e proteção antibacteriana',
      'Acabamento premium',
    ],
    image: '/products/pia-150-55-gb.png',
  },
  {
    id: 'pia-120-55-inox',
    name: 'Pia com Bojo em Aço Inox 1,20 x 0,55 m',
    category: 'pia',
    material: 'Marmofibra com Bojo de Aço Inox 430 Polido',
    dimensions: '1,20 x 0,55 m (Bojo: 56 x 33 x 11 cm)',
    colors: DEFAULT_COLORS,
    description: 'Combinação da sofisticação da marmofibra com a praticidade e brilho do bojo central em aço inox 430 polido.',
    features: [
      'Bojo em Aço Inox 430 polido de 56 x 33 x 11 cm',
      'Bancada em marmofibra resistente',
      'Design requintado para cozinhas planejadas',
      'Compatível com gabinetes de 1,20 m',
    ],
    image: '/products/pia-120-55-inox.png',
  },
  {
    id: 'pia-140-55-inox',
    name: 'Pia com Bojo em Aço Inox 1,40 x 0,55 m',
    category: 'pia',
    material: 'Marmofibra com Bojo de Aço Inox 430 Polido',
    dimensions: '1,40 x 0,55 m (Bojo: 56 x 33 x 11 cm)',
    colors: DEFAULT_COLORS,
    description: 'Pia de 1,40m com bojo em aço inox 430 polido embutido e bancada lateral ampla em marmofibra.',
    features: [
      'Bojo em Aço Inox 430 polido de 56 x 33 x 11 cm',
      'Ampla área de apoio e escorredor',
      'Alta durabilidade e resistência térmica',
      'Encaixe perfeito para gabinetes de 1,40 m',
    ],
    image: '/products/pia-140-55-inox.png',
  },

  // ==================== TANQUES SIMPLES ====================
  {
    id: 'tanque-simples-54',
    name: 'Tanque Simples 0,54 x 0,54 m',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '0,54 x 0,54 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque compacto de 1 bojo para instalação embutida na parede. Perfeito para lavanderias e áreas de serviço com espaço reduzido.',
    features: [
      'Instalação embutida na parede',
      'Friso ondulado eficiente para esfregar roupas',
      'Fundo reforçado com fibra de vidro',
      'Excelente resistência contra produtos de limpeza',
    ],
    image: '/products/tanque-simples-54.png',
  },
  {
    id: 'tanque-simples-60',
    name: 'Tanque Simples 0,60 x 0,60 m (Gabinete / Embutir)',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '0,60 x 0,60 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque de 1 bojo de 60x60 cm com capacidade reforçada. Pode ser instalado em gabinetes ou embutido.',
    features: [
      'Versatilidade de instalação (Gabinete ou Embutir)',
      'Bojo profundo e batedouro ergonômico',
      'Alta resistência ao atrito',
      'Pintura em Gel Coat impermeável',
    ],
    image: '/products/tanque-simples-60.png',
  },
  {
    id: 'tanque-bancada-85',
    name: 'Tanque Bancada 0,85 x 0,55 m',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '0,85 x 0,55 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque de 1 bojo com bancada lateral integrada, ideal para apoiar sabão, baldes e produtos de lavanderia.',
    features: [
      'Bancada lateral de apoio integrada',
      'Batedouro ergonômico',
      'Estrutura em fibra resistente a impactos',
      'Fácil escoamento de água',
    ],
    image: '/products/tanque-bancada-85.png',
  },
  {
    id: 'tanque-bacia-71',
    name: 'Tanque Bacia 0,71 x 0,64 m',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '0,71 x 0,64 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque modelo bacia com bojo arredondado e capacidade de litragem ampliada para lavagens pesadas.',
    features: [
      'Formato bacia de alta litragem',
      'Maior profundidade útil',
      'Estrutura reforçada de alta densidade',
      'Acabamento higiênico e sem cantos vivos',
    ],
    image: '/products/tanque-bacia-71.png',
  },

  // ==================== TANQUES DUPLOS ====================
  {
    id: 'tanque-duplo-100',
    name: 'Tanque Duplo 1,00 x 0,50 m (2 Bojos)',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,00 x 0,50 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque duplo compacto com dois compartimentos independentes para lavar e enxaguar simultaneamente.',
    features: [
      'Dois bojos com batedouros individuais',
      'Otimização do tempo na área de serviço',
      'Tamanho compacto para lavanderias médias',
      'Revestimento impermeável e resistente',
    ],
    image: '/products/tanque-duplo-100.png',
  },
  {
    id: 'tanque-duplo-110',
    name: 'Tanque Duplo 1,10 x 0,55 m (2 Bojos)',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,10 x 0,55 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque duplo com 1,10m de largura e 55cm de profundidade, proporcionando maior conforto e volume em cada cuba.',
    features: [
      'Maior profundidade e volume nos bojos',
      'Excelente distribuição de espaço',
      'Acabamento em Gel Coat de alto brilho',
      'Longa durabilidade',
    ],
    image: '/products/tanque-duplo-110.png',
  },
  {
    id: 'tanque-duplo-120',
    name: 'Tanque Duplo 1,20 x 0,60 m (2 Bojos)',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,20 x 0,60 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque duplo tradicional de 1,20 x 0,60 m. Um dos modelos mais versáteis e procurados para áreas de serviço residenciais e comerciais.',
    features: [
      'Dimensões generosas de 1,20 x 0,60 m',
      'Dois bojos profundos e espaçosos',
      'Alta resistência a produtos químicos',
      'Superfície não porosa',
    ],
    image: '/products/tanque-duplo-120.png',
  },
  {
    id: 'tanque-duplo-139',
    name: 'Tanque Duplo 1,39 x 0,64 m (2 Bojos)',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,39 x 0,64 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque duplo de grande porte para demandas volumosas e áreas de serviço amplas.',
    features: [
      'Capacidade máxima de litragem por bojo',
      'Estrutura ultra reforçada',
      'Ideal para sítios, comércios e grandes residências',
      'Batedouros amplos',
    ],
    image: '/products/tanque-duplo-139.png',
  },

  // ==================== TANQUES TRIPLOS ====================
  {
    id: 'tanque-triplo-160',
    name: 'Tanque Triplo 1,60 x 0,55 m (3 Bojos)',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,60 x 0,55 m',
    colors: DEFAULT_COLORS,
    description: 'Tanque de 3 bojos para lavagem, molho e enxágue simultâneos. Máxima eficiência operacional.',
    features: [
      'Três compartimentos independentes',
      'Produtividade máxima na lavanderia',
      'Revestimento contínuo em fibra de vidro',
      'Fácil escoamento nos 3 pontos',
    ],
    image: '/products/tanque-triplo-160.png',
  },
  {
    id: 'tanque-triplo-178',
    name: 'Tanque Triplo 1,78 x 0,62 m (3 Bojos)',
    category: 'tanque',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '1,78 x 0,62 m',
    colors: DEFAULT_COLORS,
    description: 'O maior tanque da linha Fibrart, com 1,78m e 3 bojos gigantes para uso comercial, industrial ou residencial de alta demanda.',
    features: [
      'Maior comprimento da categoria (1,78 m)',
      'Três bojos de alta capacidade',
      'Estrutura de máxima robustez mecânica',
      'Padrão estético de alto nível',
    ],
    image: '/products/tanque-triplo-178.png',
  },

  // ==================== LAVATÓRIOS ====================
  {
    id: 'lavatorio-63-direito',
    name: 'Lavatório de Marmofibra 0,63 x 0,45 m (Bojo Direito)',
    category: 'lavatorio',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '0,63 x 0,45 m',
    colors: DEFAULT_COLORS,
    description: 'Lavatório para banheiro com cuba posicionada ao lado direito e bancada de apoio ao lado esquerdo.',
    features: [
      'Bojo posicionado no lado direito',
      'Bancada lateral para saboneteira e acessórios',
      'Acabamento higiênico e sem poros',
      'Encaixe perfeito para gabinetes de banheiro',
    ],
    image: '/products/lavatorio-63-direito.png',
  },
  {
    id: 'lavatorio-63-esquerdo',
    name: 'Lavatório de Marmofibra 0,63 x 0,45 m (Bojo Esquerdo)',
    category: 'lavatorio',
    material: 'Marmofibra (Mármore Sintético com Fibra de Vidro)',
    dimensions: '0,63 x 0,45 m',
    colors: DEFAULT_COLORS,
    description: 'Lavatório para banheiro com cuba posicionada ao lado esquerdo e bancada de apoio ao lado direito.',
    features: [
      'Bojo posicionado no lado esquerdo',
      'Bancada lateral para saboneteira e acessórios',
      'Acabamento higiênico e sem poros',
      'Encaixe perfeito para gabinetes de banheiro',
    ],
    image: '/products/lavatorio-63-esquerdo.png',
  },
];

export const categoryLabels: Record<string, string> = {
  pia: 'Pias',
  tanque: 'Tanques',
  lavatorio: 'Lavatórios',
};

export default products;