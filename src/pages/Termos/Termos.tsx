import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import Paragraph from 'src/components/Paragraph/Paragraph'
import Divider from '@mui/material/Divider/Divider'

function TermosPage() {
  const { t } = useTranslation()
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>Termos de Uso e Privacidade | Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
      </Helmet>
      <NavBar />
      <div className='w-[70%] h-full flex flex-col gap-4 justify-center text-start pt-12 p-32'>
      <Paragraph size='h1'>📃 Termos de Uso e Privacidade</Paragraph>

        <div className='flex flex-col gap-2'>
        <Paragraph size='h6'>Última atualização: 09/12/2024</Paragraph>

        <img
          src='./bannercohive.png'
          alt='Banner da Cohive'
          loading='lazy'
          className='mx-auto w-full rounded-2xl shadow-xl mb-6'
        />
        </div>

        <Paragraph size='h6-regular'>
          A Cohive valoriza a privacidade e a segurança dos dados dos seus usuários. Nossa Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações fornecidas por você ao utilizar nosso sistema de gestão de estoque (ERP) projetado especialmente para microempresários. Ao utilizar o Cohive, você concorda com os termos estabelecidos nesta política.
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>1. Informações Coletadas</Paragraph>
        <Paragraph size='h6-regular'>
          Para oferecer uma experiência personalizada e eficiente, coletamos diferentes tipos de informações, como:
        </Paragraph>
        <Paragraph size='h6'>1.1 Informações Pessoais</Paragraph>
        <Paragraph size='h6-regular'>
          <ul>
            <li>&bull; Nome completo</li>
            <li>&bull; Endereço de e-mail</li>
            <li>&bull; Número de telefone</li>
            <li>&bull; Dados bancários (caso necessários para integração de pagamentos)</li>
          </ul>
        </Paragraph>
        <Paragraph size='h6'>1.2 Informações Comerciais</Paragraph>
        <Paragraph size='h6-regular'>
          <ul>
            <li>&bull; CNPJ da empresa</li>
            <li>&bull; Endereço da empresa</li>
            <li>&bull; Dados do estoque (produtos, quantidade, preço, etc.)</li>
            <li>&bull; Informações de fornecedores e clientes</li>
            <li>&bull; Histórico de vendas e compras</li>
          </ul>
        </Paragraph>
        <Paragraph size='h6'>1.3 Informações Técnicas</Paragraph>
        <Paragraph size='h6-regular'>
          Ao acessar o <b>Cohive</b>, também podemos coletar automaticamente:
          <br /><br />
          <ul>
            <li>&bull; Endereço IP</li>
            <li>&bull; Informações sobre o dispositivo (modelo, sistema operacional, navegador)</li>
            <li>&bull; Dados de uso do sistema (páginas visitadas, interações, tempo de navegação)</li>
          </ul>
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>2. Uso das Informações</Paragraph>
        <Paragraph size='h6-regular'>
          Os dados coletados são utilizados exclusivamente para os seguintes fins:
          <ul>
            <li>&bull; <b>Operação do Sistema</b>: Gerenciar o estoque, acompanhar vendas, emitir relatórios e facilitar a administração da sua empresa.</li>
            <li>&bull; <b>Melhorias no Serviço</b>: Personalizar sua experiência, corrigir erros, implementar novas funcionalidades e realizar análises de desempenho.
            </li>
            <li>&bull; <b>Comunicação</b>: Enviar notificações importantes, como alertas de estoque baixo, mudanças no sistema ou atualizações de política.
            </li>
            <li>&bull; <b>Compliance</b>: Cumprir obrigações legais e regulatórias, como emissão de notas fiscais (quando aplicável).
            </li>
            <li>&bull; <b>Marketing (Opcional)</b>: Enviar ofertas e promoções relacionadas ao Cohive, sempre com a possibilidade de cancelamento.
            </li>
          </ul>
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>3. Compartilhamento de Informações</Paragraph>
        <Paragraph size='h6-regular'>
          A <b>Cohive</b> se compromete a nunca vender ou compartilhar suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:
          <ul>
            <li>&bull; <b>Parceiros de Serviço</b>: Empresas contratadas para processar pagamentos, hospedar nossos servidores ou integrar sistemas (aplicável somente às informações necessárias para a execução do serviço).</li>
            <li>&bull; <b>Obrigação Legal</b>: Quando exigido por lei, regulamento ou decisão judicial.</li>
            <li>&bull; <b>Consentimento do Usuário</b>: Quando você autorizar expressamente o compartilhamento de dados.</li>
          </ul>
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>4. Proteção dos Dados</Paragraph>
        <Paragraph size='h6-regular'>
          Adotamos medidas rigorosas para proteger as informações armazenadas, incluindo:
          <ul>
            <li>&bull; <b>Criptografia de Dados</b>: Todos os dados transmitidos entre o usuário e o sistema são protegidos com criptografia SSL/TLS.</li>
            <li>&bull; <b>Armazenamento Seguro</b>: Utilizamos servidores em data centers certificados que atendem a altos padrões de segurança.</li>
            <li>&bull; <b>Controle de Acesso</b>: Apenas pessoal autorizado tem acesso aos seus dados, e todos são submetidos a rigorosos padrões de confidencialidade.</li>
          </ul>
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>5. Armazenamento e Retenção de Dados</Paragraph>
        <Paragraph size='h6-regular'>
          Manteremos seus dados armazenados enquanto você utilizar o <b>Cohive</b> ou conforme necessário para cumprir obrigações legais. Caso solicite a exclusão da sua conta, removeremos todas as informações pessoais, exceto aquelas que somos obrigados a manter por questões legais ou regulatórias.
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>6. Direitos dos Usuários</Paragraph>
        <Paragraph size='h6-regular'>
          Você tem o direito de:
          <ul>
            <li>&bull; Acessar os dados coletados sobre você.</li>
            <li>&bull; Atualizar ou corrigir informações incorretas.</li>
            <li>&bull; Solicitar a exclusão de dados pessoais (exceto aqueles obrigatórios por lei).</li>
            <li>&bull; Restringir ou recusar o uso de certas informações para fins específicos.</li>
          </ul>
          Para exercer esses direitos, entre em contato conosco pelo e-mail: <b>suporte@cohive.com</b>.
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>7. Cookies e Tecnologias Similares</Paragraph>
        <Paragraph size='h6-regular'>
          Utilizamos cookies para melhorar sua experiência e entender como você interage com o sistema. Você pode optar por desativar cookies no seu navegador, mas isso pode impactar a funcionalidade do sistema.
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>8. Atualizações na Política</Paragraph>
        <Paragraph size='h6-regular'>
          Esta Política de Privacidade pode ser revisada periodicamente para refletir mudanças no sistema, leis ou práticas comerciais. Notificaremos você sobre alterações significativas, mas recomendamos revisar esta página regularmente.
        </Paragraph>

        <Divider />

        <Paragraph size='h4'>9. Contato</Paragraph>
        <Paragraph size='h6-regular'>
          Se você tiver dúvidas, sugestões ou preocupações sobre nossa Política de Privacidade, entre em contato:
          <br />
          <b>Cohive - Sistema de Gestão de Estoque</b>
          <br />
          E-mail: suporte@cohive.com
          <br />
          Telefone: (11) 91234-5678
          <br />
          Endereço: Rua Haddock Lobo, 595 - São Paulo, SP
        </Paragraph>
      </div>
      <Footer />
    </div >
  )
}

export default TermosPage
