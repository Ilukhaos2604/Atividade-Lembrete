const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

menu();

const lembretes = [];

function menu() {
  rl.question(
    `
    Seja bem-vindo(a)
Aqui você poderá organizar seus lembretes.

O que você gostaria de fazer?
1 - Registrar Lembrete;
2 - Listar Lembrete;
3 - Concluir Lembrete;
4 - Editar Lembrete;
5 - Sair;
.: `,
    (usuario) => {
      const escolha = parseInt(usuario);
      switch (escolha) {
        case 1:
          menuRegistrarLembrete();
          break;
        case 2:
          menuListarLembretes();
          break;
        case 3:
          menuConcluirLembrete();
          break;
        case 4:
          menuEditarLembrete();
          break;
        default:
          console.log(`
            
            Tchau
            
            `);
          rl.close();
          break;
      }
    }
  );
}

function menuRegistrarLembrete() {
  rl.question(
    `
    Você gostaria de registrar algum lebrete?
    (s/n).:`,
    (usuario) => {
      switch (usuario) {
        case `s`:
          registrarLembrete();
          break;
        default:
          menu();
          break;
      }
    }
  );
  function registrarLembrete() {
    rl.question(
      `
    Nome/Lembrete
    .: `,
      (usuario) => {
        const nome = usuario;
        rl.question(
          `
    Prazo
    .: `,
          (usuario) => {
            const prazo = usuario;
            const lembrete = {
              nomeLembrete: nome,
              prazoLembrete: prazo,
              conclusao: false,
            };
            lembretes.push(lembrete);

            console.log(`
        
        Lembrete registrado com sucesso!
        
        `);

            menu();
          }
        );
      }
    );
  }
}

function menuListarLembretes() {
  rl.question(
    `Listando os elementos, você poderá saber a posição(ID) do Lembrete desejado

Você gostaria de listar os lembretes registrados?
(s/n).: `,
    (usuario) => {
      switch (usuario) {
        case `s`:
          listarLembretes();
          break;
        default:
          menu();
          break;
      }
      function listarLembretes() {
        lembretes.forEach((lembrete, ID) => {
          console.log(`
    Lembretes registrados e seus IDs:
    
    ${ID + 1}: 
    nome: ${lembrete.nome}
    prazo: ${lembrete.prazo}
    concluído?: ${lembrete.conclusao === false ? `Não concluído` : `Concluído`}
    `);
        });
      }
      menu();
    }
  );
}
