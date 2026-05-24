const CL = (id: string) =>
  `https://res.cloudinary.com/dsf09jmai/image/upload/q_auto,f_auto/${id}`

export const PHOTOS = {
  // Home
  hero: CL('Gabriel_Diana-20_spkilz'),
  visao: CL('P10-2_b8z7sg'),
  rec1: CL('Luiza-2_arzz8v'),
  rec2: CL('Site-3_ygadaq'),
  rec3: CL('Gabriel_Diana-19_f9q3vd'),
  rec4: CL('Rogeann-02_f9hbmm'),
  rec5: CL('Gabriel_Diana-9_pwctrw'),
  rec6: CL('Ipanema-88_kg8eo0'),
  rec7: CL('BT_Experience-64_sc1caw'),
  rec8: CL('Site-1_nr0pih'),
  pedro: CL('Eu-2_lk27ar'),
  ensaiosHero: CL('Mureta-2_vx5c6y'),
  // Ensaios — Retratos
  retrato1: CL('Capa-1_t3ofmq'),
  retrato2: CL('Rogeann-11_sirf6n'),
  retrato3: CL('Feira_da_gloria-32_ftoumd'),
  retrato4: CL('Shein-07_k7ku4i'),
  retrato5: CL('Recreio-3_bbwdk0'),
  // Ensaios — Casais
  casal1: CL('Gabriel_Diana-3_c0aa2q'),
  casal2: CL('Gabriel_Diana-16_vlavot'),
  casal3: CL('Gabriel_Diana-14_raga1x'),
  casal4: CL('Gabriel_Diana-6_pisrsh'),
  casal5: CL('Gabriel_Diana-22_yvgdb6'),
  // Ensaios — Marcas
  marca1: CL('BT_Experience-6_eih8zy'),
  marca2: CL('BT_Experience-28_mv0hjk'),
  marca3: CL('BT_Experience-51_ztsh8m'),
  marca4: CL('BT_Experience-39_vt1o8q'),
  marca5: CL('BT_Experience-49_run25e'),
} as const
