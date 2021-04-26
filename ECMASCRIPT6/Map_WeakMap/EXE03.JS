/*
R: Há algumas perguntas que podemos nos fazer que nos ajudam a decidir quando um Map ou um objeto literal:

As chaves são desconhecidas até o tempo de execução, você precisa procurá-las dinamicamente?
Todos os valores sempre serão do mesmo tipo, e podem ser usados de forma intercambiável?
Você precisa de chaves que não são Strings?
Os pares chave/valor são adicionados ou removidos frequentemente?
Você tem uma quantidade de pares chave/valor arbitrária (de troca fácil)?
A coleção é iterada?
Se as respostas para as perguntas forem positivas, são sinais de que você provavelmente queremos usar uma instância de Map.
*/ 