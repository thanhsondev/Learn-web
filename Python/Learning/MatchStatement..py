http_status = float(input('Enter HTTP status: '))

match http_status:
    case 200 | 201:
        print('Success')
    case 400:
        print('Bad request')
    case 500 | 501:
        print('Server error')
    case _:
        print('Unknown status')
