let users = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'bek'
    },
    {
        id: 3,
        name: 'chris'
    }
]

exports.index = (req, res) => {
    return res.json(users);
};

exports.show = (req, res) => {
    //REST API
    //param: id

    //문자열 id값을 숫자형으로 변환
    const id = parseInt(req.params.id, 10);

    //String -> Int 변환시 오류발생하면 parseInt는 NaN을 뱉어준다
    if(!id) {
        //함수 체이닝 status(400).json()
        return res.status(400).json({error: 'Incorrect id'});
    }

    //객체접근 첫번째값 [0]
    let user = users.filter(user => user.id === id)[0];
    console.log('test');
    if(!user) {
        return res.status(404).json({error: "Unknown user"});
    }

    return res.json(user)
};

exports.destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    const userIdx = users.findIndex(user => user.id === id);
    if (userIdx === -1) {
        return res.status(404).json({error: 'Unknown user'});
    }

    users.splice(userIdx, 1);
    //아무 데이터도 보내지않는다 204
    res.status(204).send();
};

exports.create = (req, res) => {
    const name = req.body.name || '';

    if (!name.length) {
        return res.status(400).json({error: 'Incorrect name'});
    }

    const id = users.reduce((maxId, user) => {
        return user.id > maxId ? user.id : maxId;
    }, 0) + 1;

    const newUser = {
        id: id,
        name: name
    };

    users.push(newUser);

    return res.status(201).json(newUser);
};
