/**
 * Dados de todos os itens do cardápio, na mesma ordem em que aparecem
 * no catálogo em PDF original (páginas 3 a 9).
 *
 * Os campos `modoPreparo`, `conservacao` e `ingredientes` são OPCIONAIS.
 * Se um item não tiver esses campos preenchidos, o site usa o texto
 * genérico definido em GENERIC_INFO (mais abaixo). Para personalizar um
 * item específico, basta adicionar o campo correspondente a ele, por
 * exemplo:
 *
 *   {
 *     id: "croqueta_cupim",
 *     ...
 *     ingredientes: "Cupim, queijo muçarela, farinha de trigo, panko, temperos...",
 *   }
 *
 * O campo `id` deve ser igual ao nome do arquivo de imagem (sem extensão)
 * dentro de /public/images.
 */

export const GENERIC_INFO = {
  conservacao:
    "Mantenha congelado a -18°C até o momento do preparo. Não recongele o produto após descongelado.",
  modoPreparo:
    "Frite em óleo quente (180°C) até dourar por completo, sem necessidade de descongelar previamente. Também pode ser preparado em forno ou air fryer.",
  ingredientes: "Informação a ser adicionada em breve.",
};

export const PRODUCTS = [
  // Página 3
  {
    id: "camafeu_camarao",
    categoria: "Frutos do Mar",
    peso: "400g",
    title: "Camafeu de Camarão GG",
    desc: "Camarões selecionados, recheados com cream cheese cremoso, empanados na farinha panko crocante.",
  },
  {
    id: "bolinho_salmao",
    categoria: "Frutos do Mar",
    peso: "350g",
    title: "Bolinho de Salmão",
    desc: "Delicados bolinhos recheados com salmão e cream cheese.",
  },
  {
    id: "bolinho_bacalhau",
    categoria: "Frutos do Mar",
    peso: "1kg",
    title: "Bolinho de Bacalhau",
    desc: "Preparados com bacalhau desfiado e batatas, temperado com ervas finas e especiarias.",
  },

  // Página 4
  {
    id: "pastel_camarao",
    categoria: "Frutos do Mar",
    peso: "350g",
    title: "Pastel de Camarão",
    desc: "Pastéis crocantes recheados com camarões bem temperados e suculentos.",
  },
  {
    id: "pastel_carne_queijo",
    categoria: "Carnes, Aves & Especiais",
    peso: "350g",
    title: "Pastel de Carne com Queijo",
    desc: "Pastéis crocantes recheados com carne bem temperada e queijo derretido na medida certa.",
  },
  {
    id: "croqueta_cupim",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Croqueta de Cupim",
    desc: "Feita com cupim desfiado e bem temperado, recheado com queijo cremoso derretido, envolta em casquinha crocante.",
  },
  {
    id: "pimenta_recheada",
    categoria: "Carnes, Aves & Especiais",
    peso: "350g",
    title: "Pimenta Recheada com Carne",
    desc: "Pimentas selecionadas, recheadas com carne bem temperada, cobertas com farinha panko, para os amantes de pimenta.",
  },

  // Página 5
  {
    id: "quibe_recheado",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Quibe Recheado",
    desc: "Sequinho e crocante por fora, feito com carne bem temperada e recheado com requeijão cremoso.",
  },
  {
    id: "disquinho_costela",
    categoria: "Bolinhos & Croquetas",
    peso: null,
    title: "Disquinho de Costela com Cheddar e Bacon",
    desc: "Disquinhos crocantes de costela bovina desfiada, recheados com cheddar cremoso e finalizados com bacon crocante.",
  },
  {
    id: "bolinho_costela_queijo",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Bolinho de Costela com Queijo",
    desc: "Feito com costela bovina bem desfiada e recheada com queijo derretido.",
  },
  {
    id: "bolinho_bbq",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Bolinho BBQ",
    desc: "Costela suína desfiada, temperada e finalizada com molho barbecue defumado.",
  },

  // Página 6
  {
    id: "bolinho_mandioca_carne_seca",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Bolinho de Mandioca com Carne Seca",
    desc: "Tradicional, feito com mandioca macia e recheado com carne seca desfiada e bem temperada.",
  },
  {
    id: "bolinho_lampiao",
    categoria: "Bolinhos & Croquetas",
    peso: null,
    title: "Bolinho Lampião",
    desc: "Massa de abóbora cremosa, recheada com carne seca desfiada, temperada na medida certa.",
  },
  {
    id: "bolinho_caipira",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Bolinho Caipira",
    desc: "Feito com jiló bem temperado, bacon crocante e queijo derretido.",
  },
  {
    id: "dadinho_tapioca",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Dadinho de Tapioca",
    desc: "Feito com tapioca granulada e queijo coalho derretido. Crocante por fora e macio por dentro.",
  },

  // Página 7
  {
    id: "palitinho_mineiro",
    categoria: "Bolinhos & Croquetas",
    peso: "350g",
    title: "Palitinho Mineiro",
    desc: "Tiras de queijo provolone, envolto em uma casquinha crocante de panko.",
  },
  {
    id: "asa_desossada",
    categoria: "Carnes, Aves & Especiais",
    peso: "650g",
    title: "Asa Desossada Recheada com Queijo e Presunto",
    desc: "Asa de frango desossada cuidadosamente, recheada com queijo derretido e presunto saboroso, temperada na medida certa.",
  },
  {
    id: "moela_frango",
    categoria: "Carnes, Aves & Especiais",
    peso: "450g",
    title: "Moela de Frango",
    desc: "Moelas de frango macias e bem temperadas, cozidas em molho encorpado, levemente picante e bastante saboroso.",
  },
  {
    id: "panceta_rustica",
    categoria: "Carnes, Aves & Especiais",
    peso: "450g",
    title: "Panceta Rústica",
    desc: "Torresmo de barriga, cortado em mini discos, temperado e preparado até alcançar uma crocância perfeita.",
  },

  // Página 8
  {
    id: "torresmo_pururuca",
    categoria: "Carnes, Aves & Especiais",
    peso: null,
    title: "Torresmo Pururuca",
    desc: "Pele de porco selecionada e desidratada, preparada com tempero especial. Sabor irresistível e textura pururuca.",
  },
  {
    id: "petit_gateau",
    categoria: "Sobremesa",
    peso: "100g",
    title: "Petit Gateau",
    desc: "Sobremesa clássica! Bolinho de chocolate com bastante recheio cremoso derretido, servido com sorvete e calda de chocolate.",
    modoPreparo:
      "Leve ao forno ou micro-ondas conforme instruções da embalagem até aquecer bem o recheio. Sirva com sorvete e calda de chocolate.",
  },
  {
    id: "panko_flocada",
    categoria: "Farinha Panko",
    peso: "1kg",
    title: "Farinha Panko Flocada Romariz",
    desc: "Farinha panko tradicional, ideal para empanar com máxima crocância.",
    modoPreparo:
      "Utilize para empanar carnes, aves, peixes e legumes antes de fritar, assar ou preparar no air fryer.",
    conservacao: "Armazene em local seco e arejado, ao abrigo da luz solar.",
  },
  {
    id: "panko_fina",
    categoria: "Farinha Panko",
    peso: "1kg",
    title: "Farinha Panko Fina Romariz",
    desc: "Flocos finos, baixa absorção de óleo, crocância por mais tempo. Permite o congelamento do produto após empanado.",
    modoPreparo:
      "Utilize para empanar carnes, aves, peixes e legumes antes de fritar, assar ou preparar no air fryer.",
    conservacao: "Armazene em local seco e arejado, ao abrigo da luz solar.",
  },

  // Página 9
  {
    id: "ligante_romariz",
    categoria: "Insumos",
    peso: "1kg",
    title: "Ligante Romariz",
    desc: "Base líquida, usada para fixar as farinhas de rosca, panko ou milho no alimento. Substitui o uso de ovos batidos, deixando o empanamento mais sequinho, crocante, durável e econômico.",
    modoPreparo:
      "Dilua conforme instruções da embalagem e utilize para umedecer o alimento antes de empanar, no lugar do ovo batido.",
    conservacao: "Armazene em local fresco e seco. Após aberto, mantenha refrigerado.",
  },
  {
    id: "batata_desidratada",
    categoria: "Insumos",
    peso: "1kg",
    title: "Batata Desidratada Romariz",
    desc: "100% batata desidratada em flocos. Batata cozida e processada, que teve sua água removida, facilitando o armazenamento e preparo rápido. Substitui a batata fresca em diversas receitas. Produto importado.",
    modoPreparo:
      "Hidrate com água ou leite quente conforme instruções da embalagem até obter o purê ou a consistência desejada.",
    conservacao: "Armazene em local seco e arejado, ao abrigo da luz solar.",
  },
  {
    id: "creme_pimenta",
    categoria: "Insumos",
    peso: "150g",
    title: "Creme de Pimenta",
    desc: "Molho cremoso de pimenta, elaborado com uma combinação equilibrada de pimentas selecionadas e tempero goiano. Dois tipos: molho mexicano ou extraforte.",
    modoPreparo: "Sirva como acompanhamento de petiscos, carnes e lanches em geral.",
    conservacao: "Mantenha refrigerado após aberto e consuma dentro do prazo indicado na embalagem.",
  },
];
