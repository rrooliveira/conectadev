import mock from "../utils/mock";

// mock.onPost('/api/home/login')
//     .reply(
//         200, 
//         {'id': 1, 'username': 'rro.oliveira', 'email': 'rro.oliveira@gmail.com'}
//     )


mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)
    
    if (email !== 'rro.oliveira@gmail.com' || password !== 'rodrigo') {
        return [400, { message: 'Dados de acesso inválidos.'}]
    }

    const user = {
        id: 1,
        name: 'Rodrigo Oliveira',
        username: 'rrooliveira',
        email: 'rro.oliveira@gmail.com'
    }

    return [200, { user }]
})