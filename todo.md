# Project TODO - FABRANI Consultoria Landing Page

## Estrutura Base
- [x] Hero Section com headline de alta conversão
- [x] Contador regressivo de 24h no header
- [x] Barra de urgência no topo (50 vagas)
- [x] Problem Section (3 dores principais)
- [x] Solution Section (Sobre o Founder)
- [x] Social Proof (Casos de sucesso)
- [x] Offer Stack (O que recebe por R$ 97)
- [x] Aliança FABRANI Section
- [x] Objection Crusher (Quebra de objeções)
- [x] Urgency/Scarcity Section
- [x] FAQ completo
- [x] Final CTA com comparação de escolhas
- [x] Footer institucional

## Rastreamento
- [x] Pixel do Facebook integrado (ID: 2419105295112897)
- [x] Evento PageView implementado
- [x] Evento InitiateCheckout nos botões CTA

## Design e UX
- [x] Dark mode obrigatório
- [x] Paleta verde neon (#00FF87) + preto profundo (#0A0A0A)
- [x] Responsividade mobile-first
- [x] Animações de entrada (fade-in-up)
- [x] Glassmorphism nos cards

## Melhorias de Legibilidade (v2)
- [x] Aumentar tamanho base das fontes (18px body)
- [x] Melhorar contraste do texto muted (de #666 para #B0B0B0)
- [x] Headlines maiores e mais impactantes
- [x] CTAs com padding maior e texto mais legível
- [x] Barra de urgência com fundo verde (alto contraste)
- [x] Contador com números em caixas destacadas
- [x] Espaçamento entre seções aumentado
- [x] Cards com padding maior
- [x] FAQ com texto maior nas respostas
- [x] Footer com links mais legíveis

## Pendente
- [ ] Substituir links de checkout pelo link real da Greenn
- [ ] Configurar Pixel na plataforma Greenn (evento Purchase)
- [ ] Adicionar botão flutuante de WhatsApp (opcional)
- [ ] Configurar subdomínio personalizado na Cloudflare

## Sistema de Urgência com Redirecionamento
- [x] Criar sistema de cookie para marcar primeiro acesso
- [x] Alterar contador de 24h para 20 minutos
- [x] Implementar lógica de redirecionamento após tempo esgotar
- [x] Criar página /time com preço R$ 147,00
- [x] Testar fluxo completo (acesso → 20min → redirecionamento)

## Página de Obrigado (/obrigado)
- [x] Criar componente ThankYouPage.tsx
- [x] Seção de celebração inicial
- [x] Passo 1: Formulário estratégico com link
- [x] Passo 2: Agendamento com regra 48h
- [x] Checklist visual
- [x] O que esperar da consultoria
- [x] FAQ rápido
- [x] Botão flutuante WhatsApp
- [x] Adicionar rota /obrigado no App.tsx
- [x] Testar página completa

## Correção Página de Obrigado
- [x] Remover Header com contador de urgência da página /obrigado
- [x] Criar header simplificado sem sistema de redirecionamento
- [x] Testar página corrigida

## Integração Pixel Facebook (2419105295112897)
- [x] Adicionar código base do Pixel no index.html (todas as páginas)
- [x] Configurar evento PageView automático
- [x] Adicionar evento Purchase na página /obrigado
- [x] Testar integração do Pixel

## Correção CTAs Mobile
- [x] Alterar texto dos CTAs para "QUERO ACESSAR" na página principal
- [x] Alterar texto dos CTAs para "QUERO ACESSAR" na página /time
- [x] Ajustar tamanho dos botões para versão mobile
- [x] Testar responsividade em mobile

## Prova Social - Parceiros e Vídeos
- [x] Extrair imagens do documento provasocial.docx
- [x] Copiar vídeos para pasta pública (vendedordeElite.mp4, RennerSilva.mp4, outlier2025.mp4)
- [x] Criar seção de parceiros com imagens (Ícaro, Escola do Dólar, Neil Patel)
- [x] Adicionar seção de vídeos de depoimentos
- [x] Testar exibição de imagens e vídeos

## Atualização da Copy da Landing Page (Nova Versão)
- [x] Atualizar Hero Section (headline: "Pare de Vender Curso. Construa uma Escola Digital Escalável")
- [x] Atualizar subheadline com modelo de 100k alunos
- [x] Atualizar Problem Section com 3 dores (Gargalo, Commodity, Escalar sem perder autoridade)
- [x] Atualizar Solution Section com Sistema P^3
- [x] Atualizar Offer Stack com nova estrutura de valor
- [x] Manter design, vídeos, parceiros e informações sobre Elias
- [x] Manter sistema de redirecionamento de 20 minutos
- [x] Testar página completa

## Atualização Página /time (R$ 147)
- [x] Atualizar Hero Section com nova copy (Sistema P³)
- [x] Atualizar Problem Section com 3 dores
- [x] Atualizar Solution Section com Sistema P³
- [x] Atualizar Offer Stack com nova estrutura (preço R$ 147)
- [x] Testar página /time completa

## Integração Checkout Greenn (Página Principal)
- [x] Substituir todos os links de checkout na Home.tsx pelo link da Greenn
- [x] Testar funcionamento dos botões

## Integração Checkout Greenn (Página /time - R$ 147)
- [x] Substituir todos os links de checkout na TimePage.tsx pelo link da Greenn
- [x] Testar funcionamento dos botões

## Pop-up de Saída (Exit Intent)
- [x] Criar componente ExitPopup.tsx
- [x] Implementar detecção de exit intent (mouse sai da janela)
- [x] Design com mensagem "50% OFF - Restam 3 vagas"
- [x] CTA para checkout R$ 47
- [x] Mostrar apenas uma vez por sessão
- [x] Integrar nas páginas principal e /time
- [x] Testar funcionamento

## Ajustes Menu, Pop-up e Vídeos
- [x] Remover valor (R$ 97) do menu superior
- [x] Remover "50 vagas" do menu
- [x] Ampliar o contador no menu
- [x] Ajustar pop-up para funcionar no mobile (scroll up + tempo na página)
- [x] Adicionar thumbnails/posters nos vídeos
- [x] Testar todas as alterações

## Sincronizar Página /time com Principal
- [x] Adicionar seção de Parceiros FABRANI com todas as imagens
- [x] Adicionar vídeos (Outlier, Vendedor de Elite, Renner Silva)
- [x] Manter preço R$ 147 e checkout correto
- [x] Testar página completa

## Backup Git - Todas as Páginas
- [x] Verificar estrutura de páginas (/, /time, /obrigado)
- [x] Verificar status do Git
- [x] Adicionar todos os arquivos ao Git
- [x] Criar commit com todas as páginas
- [x] Criar checkpoint/backup completo

## Correção Nome do Projeto
- [x] Atualizar título para escala.fabrani.com.br (sem "e")

## Correção Pixel Facebook
- [x] Remover evento Purchase da página /obrigado (evitar dados incorretos)

## Nova Seção: O que você só encontra na FABRANI
- [x] Criar seção com 4 diferenciais + data do encontro 12/02/2026
- [x] Adicionar à página principal (/)
- [x] Adicionar à página /time
- [x] Adicionar à página /expirado
- [x] Testar e validar em todas as páginas

## Atualização Exit Popup - Preço e URL Greenn
- [x] Alterar preço do exit popup de R$ 47,00 para R$ 97,00
- [x] Remover desconto visual ("De R$ 97")
- [x] Atualizar URL de checkout para `https://payfast.greenn.com.br/em29d57/offer/aiAmgX`
- [x] Atualizar evento Pixel Facebook (value: 97.0)
- [x] Testar pop-up funcionando corretamente
