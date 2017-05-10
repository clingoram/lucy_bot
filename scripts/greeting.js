module.exports = function(robot) {
    robot.hear(/(Hello|hello|Hi|hi|你好|早安|午安|晚安|哈囉)/, function(response) {
        re = ['Hello', 'hello', 'Hi', 'hi', '你好', '你好啊', '哈囉', response.match[1]];
        response.send(response.random(re));
    });
    robot.hear(/(How are you?|How're you doing?)/, function(response) {
        re = ['Fine', 'Great :)', 'Not bad', 'so so','還OK','普通','還過得去', response.match[1]];
        response.send(response.random(re));
    });

}
