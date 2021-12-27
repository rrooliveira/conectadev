import mock from "../utils/mock";

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)
    
    if (email !== 'rro.oliveira@gmail.com' || password !== 'rodrigo') {
        return [400, { message: 'Dados de acesso inválidos.'}]
    }

    const user = {
        id: 1,
        name: 'Rodrigo Oliveira',
        username: 'rrooliveira',
        email: 'rro.oliveira@gmail.com',
        avatar: '/images/avatars/avatar_1.jpeg'
    }

    return [200, { user }]
})

mock.onPost('/api/home/me').reply(200, {
    user: {
        id: 1,
        name: 'Rodrigo Oliveira',
        username: 'rrooliveira',
        email: 'rro.oliveira@gmail.com',
        avatar: '/images/avatars/avatar_1.jpeg'
    }
})