from pyramid.view import view_config


@view_config(route_name='home', renderer='templates/game.pt')
def my_view(request):
    return {
			'project': 'Tictactoe',
			'css': request.static_url('tictactoe:static/game.css'),
			'js': request.static_url('tictactoe:static/game.js')
			}
