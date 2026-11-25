@"
CASO DE TESTE: CT10 - Verificar quantidade no carrinho
NAVEGADOR: Microsoft Edge

EXECUÇÃO INICIAL:
Resultado: timedOut
Tempo limite: 30 segundos
Etapa: locator.hover()
Elemento: .product-image-wrapper

DESCRIÇÃO:
O teste não conseguiu localizar o elemento do produto dentro do tempo limite.
A execução geral apresentou indícios de sobrecarga do site (heavy load / queue full).

REEXECUÇÃO:
Resultado: passed
Tempo: 11 segundos
Comando:
npx playwright test tests/carrinho.spec.ts --project=msedge --grep "CT10" --workers=1

CONCLUSÃO:
A falha inicial foi compatível com instabilidade temporária do ambiente.
A reexecução foi aprovada. Não foi confirmado defeito funcional no carrinho.
"@ | Set-Content ".\evidencias\CT10-heavy-load\registro-CT10.txt" -Encoding UTF8