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