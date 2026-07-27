const kiwifyCheckoutUrl = import.meta.env.VITE_KIWIFY_CHECKOUT_URL?.trim() || ''

export const product = {
  name: 'Torne-se o Maior Vendedor de Todos os Tempos',
  author: 'Tiago Braga',
  oldPrice: 'R$ 97,00',
  currentPrice: 'R$ 39,90',
  savings: 'R$ 57,10',
  paymentType: 'Pagamento único',
  guaranteeDays: 7,
  includesAudiobook: true,
  checkoutUrl: kiwifyCheckoutUrl,
  checkoutReady: Boolean(kiwifyCheckoutUrl),
}

export const trackCtaClick = (location) => {
  // TODO: integrar aqui a ferramenta de analytics quando ela for definida.
  window.dispatchEvent(new CustomEvent('sales:cta-click', { detail: { location } }))
}

export const checkoutLinkProps = (location) => ({
  href: product.checkoutReady ? product.checkoutUrl : undefined,
  'aria-disabled': product.checkoutReady ? undefined : 'true',
  title: product.checkoutReady ? undefined : 'Checkout da Kiwify em configuração',
  onClick: (event) => {
    trackCtaClick(location)
    if (!product.checkoutReady) event.preventDefault()
  },
})

export const steps = [
  ['Quebra-gelo e elogio sincero', 'Abra a conversa reduzindo a defesa natural do cliente, sem parecer artificial.'],
  ['Diagnóstico', 'Faça as perguntas certas e descubra a necessidade real antes de oferecer uma solução.'],
  ['Espelhamento da solução', 'Conecte sua oferta ao que o cliente disse que precisa, utilizando a linguagem dele.'],
  ['A escada do sim', 'Construa pequenas concordâncias que tornam a decisão final mais natural.'],
  ['Valor × preço', 'Aumente o valor percebido sem depender de descontos ou sacrificar sua margem.'],
  ['O fechamento “ou, ou”', 'Apresente caminhos e conduza a escolha sem pressionar por uma resposta binária.'],
  ['Fechamento silencioso', 'Transforme a formalização do pedido em uma continuação natural da conversa.'],
  ['Sim × não', 'Lide com a hesitação final com segurança, calma e clareza.'],
  ['História estratégica', 'Use exemplos para reduzir objeções sem parecer manipulador.'],
  ['Venda perdida', 'Transforme um “não” em aprendizado e, muitas vezes, reabra a negociação.'],
]

export const faqItems = [
  ['Como recebo o e-book e o audiobook?', 'Após a confirmação do pagamento, o acesso digital aos materiais é enviado para o e-mail informado na compra.'],
  ['O audiobook está incluído?', 'Sim. O audiobook profissional completo está incluído na oferta junto com o e-book.'],
  ['O produto é físico ou digital?', 'É um produto digital composto pelo e-book e pelo audiobook. Não há envio de produto físico.'],
  ['Preciso ter experiência em vendas?', 'Não. O conteúdo acompanha a jornada do primeiro contato ao fechamento e atende iniciantes e profissionais experientes.'],
  ['Consigo ler no celular, computador ou tablet?', 'Sim. O conteúdo digital pode ser consultado nesses dispositivos.'],
  ['O pagamento é único?', 'Sim. O valor de R$ 39,90 corresponde a um pagamento único.'],
  ['O método funciona para B2B e B2C?', 'Sim. Os princípios são apresentados para vendas B2B, B2C, serviços e negociações do dia a dia.'],
  ['Como funciona a garantia de 7 dias?', 'Você pode conhecer e avaliar o conteúdo por 7 dias. Se entender que o material não atende às suas necessidades, pode solicitar a devolução dentro desse período e receber o reembolso do valor pago.'],
]
