  ---------------
  /* 
        Object.assing(atribui,pega): Esse método PEGA as propriedades de um objeto passado como segundo parâmetro e ATRIBUI as propriedades de outro objeto do primeiro parâmetro.

         OBS: as propriedades precisam ter o mesmo nome, em ambos!
  */  
  
  ---------------
  /*
    extends PartialType(classe) = em específico, recebe uma classe como parâmetro e aplica em todas as suas propriedades o decorator @IsOptional() do class-validator. 
    
    
  */ 
  ---------------
  /*
    operador In() = verificar se o ID da busca corresponde a algum ID da lista de produtosIds, que retornamos com o map()
    
  */  
  
  ---------------
  /* 
        cascade: true (habilitar o comportamento em cascata e automatizar as operações em registros filhos)

        sempre que uma entidade PedidoEntity for criada,
        automaticamente será criada uma entidade ItemPedido também na tabela,
        estabelecendo assim a relação via cascata. 
  */
 ---------------
  /* 
      onDelete: CASCADE , onUpdate: CASCADE
     
      sempre que um pedido for criado, atualizado ou deletado,
      essas ações também serão aplicadas em cascata às propriedades do itempedido.

      CASCADE = se refere às operações nos registros relacionados.
  */
 ---------------