var { spawn } = require('child_process');

function sum(a, b) {
    return new Promise((resolve, reject) => {
        var child = spawn('./test.sh', [], {timeout: 4000});
        child.stdout.on('data', (data) => {
            console.log('stdout:' + data.toString());
        });
        child.stderr.on('data', (data) => {
            console.log('stderr:' + data.toString());
        });
        child.on('close', (code) => {
            console.log(`close:${code}`);
            resolve(3);
        });
        child.stdin.write('test1\n');
        child.stdin.write('test2\n');
        child.stdin.write('test3\n');
        child.stdin.write('error\n');
        child.stdin.write('test4\n');
        child.stdin.write('test5\n');
        child.stdin.write('test6\n');
        child.stdin.write('\n\n');
        // child.stdin.end();
    });
}
module.exports = sum;