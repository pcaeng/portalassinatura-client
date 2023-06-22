# Demonstração do Portal de Assinaturas

O Portal de Assinaturas tem como objetivo facilitar a maneira a qual inserimos e assinamos documentos, com um cadastro de assinatura ágil e com todas as informações necessárias para o prosseguimento da assinatura.

## Tela de demonstração

Nossa tela de demonstração foi feita utilizando a lógica de painéis dinâmicos, onde possuímos três painéis: O primeiro para a apresentação do portal, o segundo para as informações relacionadas aos documentos e inserção dos mesmos e, o terceiro, por sua vez, para as informações acerca dos responsáveis pela assinatura. Adicionalmente, temos um painel para as configurações, onde podemos optar pela forma a qual o documento será assinado e o método de verificação desejado: Reconhecimento facial ou E-mail Token.

## Mais quantidade e facilidade
Ambos os painéis de informações presentes na tela de demonstração possuem a opção de adicionar ou remover campos, tornando dinâmica a experiência de inserção de múltiplos arquivos e facilitando a adição de partes responsáveis pelo documento.

---

## Portal de assinatura integrado

Como requisito para que o portal de assinatura integrado funcione, primeiramente precisamos importar as suas informações para o código, por meio do seguinte bloco:

```
<script
    defer="defer"
    src="https://stage3.pca.com.br/PortalAssinatura/cdn/pca-signature.js"
></script>
```

Após a importação do script e preenchimento das informações nos painéis anteriores da tela de demonstração, os valores inseridos para CPF e data de nascimento são responsáveis por preencher parte dos parâmetros necessários para a chamada de um portal externo, de forma integrada à tela de demonstração.

```
<div
    id="pca-signature"
    data-pca-signature-id=""
    data-pca-signature-info='{ "cpf":"", "birthdate":"" }'
></div>
```

* id: O id do elemento onde será renderizado a tela do portal de assinatura deve ser "pca-signature".
* data-pca-signature-id: Atributo para referenciar o ID da assinatura em questão, formato GUID.
* data-pca-signature-info: Atributo onde estão armazenadas as informações do CPF e da data de nascimento.

---

## Informações enviadas

As informações obtidas e enviadas preenchem os seguintes objetos:

* Para a assinatura:

```
const emptySignature = {
  place: ['SignaturePortal'],
  authentication: 'FormAuth',
  type: ['Facial', 'EmailToken'],
  callbackUrl: '',
  documents: []
};
```

* Para o assinante:

```
const emptyCustomer = {
  partyId: '4BFBFB1A-416F-4FF7-984C-1EEC705091F6',
  name: '',
  email: '',
  cpf: '',
  birthdate: new Date(),
  document: {
    name: 'RG',
  },
};
```
---

## Documentação

O código fonte desta demonstração poderá ser utilizado também como documentação e guia para os desenvolvedores e está disponível em https://github.com/pcaeng/portalassinatura-client