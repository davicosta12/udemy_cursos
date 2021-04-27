from flask_restful import Resource, reqparse

from models.serie import SerieModel

series = [
    {
        'serie_id': 1254541659,
        'name': 'Breaking Bad',
        'genero': 'Drama',
        'data_Lancamento': '20/01/2008',
        'qtde_de_premios': 25,
        'estrelas': 4.8,

    },
    {
        'serie_id': 9875632548,
        'name': 'Prison Break',
        'genero': 'Drama',
        'data_Lancamento': '20/01/2008',
        'qtde_de_premios': 25,
        'estrelas': 4.8,
    },
    {
        'serie_id': 7102256655,
        'name': 'Você',
        'genero': 'Drama',
        'data_Lancamento': '20/01/2008',
        'qtde_de_premios': 25,
        'estrelas': 4.8,
    },
    {
        'serie_id': 3656844516,
        'name': 'Bates Motel',
        'genero': 'Drama',
        'data_Lancamento': '20/01/2008',
        'qtde_de_premios': 25,
        'estrelas': 4.8,
    },
    {
        'serie_id': 2651848415,
        'name': 'La Casa de Papel',
        'genero': 'Drama',
        'data_Lancamento': '20/01/2008',
        'qtde_de_premios': 25,
        'estrelas': 4.8,
    },
]

class Series(Resource):
  def get(self):
    return series, 200

class Serie(Resource):
  parser = reqparse.RequestParser()
  parser.add_argument('name')
  parser.add_argument('genero')
  parser.add_argument('data_Lancamento')
  parser.add_argument('qtde_de_premios')
  parser.add_argument('estrelas')

  def find_Serie(self, serie_id):
    for serie in series:
      if (serie['serie_id'] == serie_id):
        return serie
    return None

  def get(self, serie_id):
    serie = self.find_Serie(serie_id)
    if(serie):
      return serie, 200
    return {'status': 404, 'message': 'id_seriado not exist!'}, 404

  def post(self, serie_id):
    if SerieModel.find_serie(serie_id):
      return {'status': 400, 'message': 'id_seriado already exist!'}, 400
    dados = self.parser.parse_args()
    serie_objeto = SerieModel(serie_id, **dados)
    serie_objeto.save_serie()
    return serie_objeto.json(), 201

  def put(self, serie_id):
    args = self.parser.parse_args()
    serie_dict = SerieModel(serie_id, **args).json()
    serie = self.find_Serie(serie_id)

    if(serie):
      serie.update(serie_dict)
      return serie, 200
    series.append(serie_dict)
    return series, 201

  def delete(self, serie_id):
    global series
    serie = self.find_Serie(serie_id)
    if(serie):
      series = [serie for serie in series if(serie['serie_id'] != serie_id)]
      return {'status': 200, 'message': 'serie deletada com sucesso!'}, 200
    return {'status': 404, 'message': 'id não existe!'}, 404
