from flask_restful import Resource, reqparse

from models.hotel import HotelModel

"""hoteis = [
    {
        'hotel_id': 'alpha',
        'nome': 'Alpha Hotel',
        'estrelas': 2.5,
        'diaria': 420.34,
        'cidade': 'Francisco Morato'
    },
    {
        'hotel_id': 'bravo',
        'nome': 'Bravo Hotel',
        'estrelas': 3.5,
        'diaria': 420.34,
        'cidade': 'Jundiai'
    },
    {
        'hotel_id': 'dark',
        'nome': 'Dark Hotel',
        'estrelas': 3.3,
        'diaria': 420.34,
        'cidade': 'Franco da rocha'
    },
    {
        'hotel_id': 'dense',
        'nome': 'Dense Hotel',
        'estrelas': 4.3,
        'diaria': 420.34,
        'cidade': 'São Paulo'
    },
    {
        'hotel_id': 'paradise',
        'nome': 'Paradise Hotel',
        'estrelas': 4.8,
        'diaria': 420.34,
        'cidade': 'Santa Catarina'
    },
]"""

class Hoteis(Resource):
    def get(self):
        return {'hoteis': [hotel.json() for hotel in HotelModel.query.all()]}

class Hotel(Resource):
    argumentos = reqparse.RequestParser()
    argumentos.add_argument('nome', type=str, required=True, help="The field 'nome' cannot be left blank")
    argumentos.add_argument('estrelas', type=float, required=True, help="The field 'estrelas' cannot be left blank")
    argumentos.add_argument('diaria')
    argumentos.add_argument('cidade')

    def get(self, hotel_id):
        hotel = HotelModel.find_hotel(hotel_id)
        if hotel:
            return hotel.json()
        return {'message': 'Hotel not found.'}, 404

    def post(self, hotel_id):
        if HotelModel.find_hotel(hotel_id):
            return {"message": "Hotel id '{}' already exists.".format(hotel_id)}, 400 # Bad Request 

        dados = self.argumentos.parse_args()
        hotel_objeto = HotelModel(hotel_id, **dados)  # Objeto
        try:
            hotel_objeto.save_hotel()
        except:
            return {'message': 'An internal error ocurred trying to save hotel.'}, 500 # Internal Server Error
        return hotel_objeto.json(), 200

    def put(self, hotel_id):
        dados = self.argumentos.parse_args()
        hotel_encontrado = HotelModel.find_hotel(hotel_id)

        if hotel_encontrado:
            hotel_encontrado.update_hotel(**dados)
            try:
                hotel_encontrado.save_hotel()
            except:
                return {'message': 'An internal error ocurred trying to save hotel.'}, 500 
            return hotel_encontrado.json(), 200  # OK

        hotel_objeto = HotelModel(hotel_id, **dados)  # Objeto
        try:
            hotel_objeto.save_hotel()
        except:
            return {'message': 'An internal error ocurred trying to save hotel.'}, 500
        return hotel_objeto.json(), 201

    def delete(self, hotel_id):
        # hoteis = [hotel for hotel in hoteis if hotel['hotel_id'] != hotel_id]
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        if hotel_encontrado:
            try:
                hotel_encontrado.delete_hotel()
            except:
                return {'message': 'An error ocurred trying to delete hotel.'}, 500
            return {"message": "Hotel id '{}' deleted.".format(hotel_id)}, 200
        return {"message": "Hotel id '{}' not found.".format(hotel_id)}, 404
        
