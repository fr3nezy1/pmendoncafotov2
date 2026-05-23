// TODO: substituir TODAS estas URLs por fotos do Cloudinary do Pedro
// quando o portfólio estiver curado. Por enquanto, Unsplash em golden hour.

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

export const PHOTOS = {
  hero: UNSPLASH('photo-1496440737103-cd596325d314', 1800),
  visao: UNSPLASH('photo-1483729558449-99ef09a8c325', 1800),
  rec1: UNSPLASH('photo-1488161628813-04466f872be2'),
  rec2: UNSPLASH('photo-1519225421980-715cb0215aed'),
  rec3: UNSPLASH('photo-1571019613454-1cb2f99b2d8b'),
  rec4: UNSPLASH('photo-1517841905240-472988babdf9'),
  rec5: UNSPLASH('photo-1525258946800-98cfd641d0de'),
  rec6: UNSPLASH('photo-1518611012118-696072aa579a'),
  rec7: UNSPLASH('photo-1494774157365-9e04c6720e47'),
  rec8: UNSPLASH('photo-1530549387789-4c1017266635'),
} as const
