from sql_alchemy import banco

class SerieModel(banco.Model):
  __tablename__ = 'series'
  serie_id = banco.Column(banco.Integer, primary_key=True)
  name = banco.Column(banco.String(60))
  gerero = banco.Column(banco.String(40))
  data_Lancamento = banco.Column(banco.String(20))
  qtde_de_premios = banco.Column(banco.Integer)
  estrelas = banco.Column(banco.Float(precision='1'))

  def __init__(self, serie_id, name, genero, data_Lancamento, qtde_de_premios, estrelas):
    self.serie_id = serie_id,
    self.name = name,
    self.genero = genero,
    self.data_Lancamento = data_Lancamento,
    self.qtde_de_premios = qtde_de_premios,
    self.estrelas = estrelas

  def json(self):
    return {
      'serie_id': self.serie_id,
      'name': self.name,
      'genero': self.genero,
      'data_Lancamento': self.data_Lancamento,
      'qtde_de_premios': self.qtde_de_premios,
      'estrelas': self.estrelas,
  	}
  
  @classmethod
  def find_serie(cls, serie_id):
    serie = cls.query.filter_by(serie_id=serie_id).first()
    if serie:
      return serie
    else:
      return None

  def save_serie(self):
    banco.session.add(self)
    banco.session.commit()

  

 
