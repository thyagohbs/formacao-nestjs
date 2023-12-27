  ---------------
    /* 
        cascade: true

       sempre que uma entidade PedidoEntity for criada,
       automaticamente será criada uma entidade ItemPedido também na tabela,
       estabelecendo assim a relação via cascata. 
       
    */
 ---------------
    /* 
        onDelete: CASCADE , onUpdate: CASCADE
     
        sempre que um pedido for criado, atualizado ou deletado,
        essas ações também serão aplicadas em cascata às propriedades do itempedido.
    */
 ---------------