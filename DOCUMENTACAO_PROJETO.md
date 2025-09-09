# Documentação do Projeto - SoftSolutions Website

## Visão Geral
Este é um site responsivo e moderno para uma empresa de soluções de software, desenvolvido com React, TypeScript, Tailwind CSS e componentes shadcn/ui. O design é minimalista com foco em tons de azul e área de contato destacada.

## Estrutura de Arquivos e Funcionalidades

### 📁 Arquivos de Configuração Raiz

#### `package.json`
- **Função**: Define dependências, scripts e metadados do projeto
- **Quando alterar**: Para adicionar/remover bibliotecas, modificar scripts de build
- **⚠️ IMPORTANTE**: NÃO edite diretamente - use comandos do 

#### `tailwind.config.ts`
- **Função**: Configuração do Tailwind CSS com tema personalizado
- **Quando alterar**: Para modificar cores do sistema, breakpoints, animações
- **Contém**: Mapeamento de cores HSL para o design system

#### `vite.config.ts`
- **Função**: Configuração do bundler Vite
- **Quando alterar**: Raramente - apenas para configurações avançadas de build

#### `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`
- **Função**: Configuração do TypeScript
- **Quando alterar**: Para modificar regras de tipagem ou paths

### 📁 src/ - Código Fonte Principal

#### `src/main.tsx`
- **Função**: Ponto de entrada da aplicação React
- **Quando alterar**: Raramente - apenas para configurações globais

#### `src/App.tsx`
- **Função**: Componente raiz com roteamento e providers
- **Quando alterar**: Para adicionar novas rotas ou providers globais
- **Contém**: React Router, Query Client, Toast providers

#### `src/index.css`
- **Função**: Estilos globais e design system (MUITO IMPORTANTE)
- **Quando alterar**: Para modificar cores, gradientes, sombras, animações
- **Contém**: 
  - Variáveis CSS para tema claro/escuro
  - Tons de azul personalizados
  - Gradientes e sombras
  - Animações suaves

### 📁 src/pages/ - Páginas da Aplicação

#### `src/pages/Index.tsx`
- **Função**: Página principal que monta todo o site
- **Quando alterar**: Para reordenar seções ou adicionar novas
- **Contém**: Importação e renderização de todos os componentes

#### `src/pages/NotFound.tsx`
- **Função**: Página de erro 404
- **Quando alterar**: Para personalizar mensagem de erro

### 📁 src/components/ - Componentes Reutilizáveis

#### `src/components/Header.tsx`
- **Função**: Cabeçalho/navbar com navegação responsiva
- **Quando alterar**: Para modificar menu, logo ou navegação
- **Recursos**: Menu mobile, scroll suave, logo animado

#### `src/components/Hero.tsx`
- **Função**: Seção principal/banner do site
- **Quando alterar**: Para modificar título, subtítulo ou call-to-actions
- **Recursos**: Gradiente de fundo, ícones animados, botões destacados

#### `src/components/Services.tsx`
- **Função**: Seção de serviços em grid responsivo
- **Quando alterar**: Para adicionar/remover serviços ou tecnologias
- **Recursos**: Cards hover, badges de tecnologias, ícones

#### `src/components/About.tsx`
- **Função**: Seção sobre a empresa
- **Quando alterar**: Para modificar estatísticas, missão/visão, valores
- **Recursos**: Cards de estatísticas, badges de tecnologias

#### `src/components/Contact.tsx`
- **Função**: Seção de contato destacada (PRINCIPAL)
- **Quando alterar**: Para modificar formulário, informações de contato
- **Recursos**: 
  - Formulário funcional com toast
  - Background animado
  - Cards informativos
  - Gradientes destacados

#### `src/components/Footer.tsx`
- **Função**: Rodapé com links e informações
- **Quando alterar**: Para modificar links, informações da empresa

### 📁 src/components/ui/ - Componentes UI (shadcn)
- **Função**: Componentes de interface reutilizáveis
- **Quando alterar**: Para customizar aparência dos componentes base
- **Principais**:
  - `button.tsx` - Botões customizáveis
  - `card.tsx` - Cards/containers
  - `input.tsx` - Campos de entrada
  - `toast.tsx` - Notificações

### 📁 src/hooks/ - Hooks Customizados

#### `src/hooks/use-toast.ts`
- **Função**: Hook para notificações toast
- **Quando alterar**: Para modificar comportamento das notificações

#### `src/hooks/use-mobile.tsx`
- **Função**: Hook para detectar dispositivos móveis
- **Quando alterar**: Raramente

### 📁 src/lib/ - Utilitários

#### `src/lib/utils.ts`
- **Função**: Funções utilitárias (merge de classes CSS)
- **Quando alterar**: Para adicionar utilitários globais

### 📁 public/ - Arquivos Estáticos
- **Função**: Imagens, ícones, arquivos acessíveis publicamente
- **Quando alterar**: Para adicionar assets do site

## 🎨 Design System e Cores

### Cores Principais (definidas em `src/index.css`)
```css
--blue-primary: 213 94% 32%    /* Azul principal */
--blue-secondary: 210 89% 45%  /* Azul secundário */
--blue-light: 210 89% 92%      /* Azul claro */
--blue-dark: 213 94% 18%       /* Azul escuro */
```

### Como Modificar Cores
1. Edite as variáveis CSS em `src/index.css`
2. Use formato HSL (Hue, Saturation, Lightness)
3. Mantenha consistência entre modo claro/escuro

## 🔧 Principais Personalizações

### Para Modificar Conteúdo:
1. **Textos**: Edite diretamente nos componentes
2. **Serviços**: Modifique array em `Services.tsx`
3. **Estatísticas**: Altere array em `About.tsx`
4. **Contato**: Atualize informações em `Contact.tsx`

### Para Modificar Aparência:
1. **Cores**: `src/index.css`
2. **Componentes**: Respectivos arquivos em `src/components/`
3. **Layout**: `tailwind.config.ts` para breakpoints

### Para Adicionar Funcionalidades:
1. **Nova página**: Criar em `src/pages/` e adicionar rota em `App.tsx`
2. **Novo componente**: Criar em `src/components/`
3. **Novo hook**: Criar em `src/hooks/`

## 📱 Responsividade
- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Teste em**: Diferentes tamanhos de tela

## 🚀 Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build

## ⚠️ Arquivos que NÃO devem ser editados
- `.gitignore`
- `package.json` (use comandos )
- `package-lock.json`
- `bun.lockb`
- Arquivos de configuração TypeScript
- `components.json`

## 🎯 Pontos de Atenção
1. **Design System**: Sempre use as variáveis CSS definidas
2. **Responsividade**: Teste em mobile primeiro
3. **Acessibilidade**: Mantenha alt texts e labels
4. **Performance**: Otimize imagens e componentes
5. **SEO**: Títulos e meta descriptions adequados

---

**Desenvolvido com ❤️ para SoftSolutions**