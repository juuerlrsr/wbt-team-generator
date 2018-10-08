var teams = document.getElementById('teams'),
    options = document.getElementById('options'),
    participants = document.getElementById('participants'),
    submit = document.getElementById('submit'),
    regenerate = document.getElementById('regenerate'),
    editparticipants = document.getElementById('editparticipants'),
    form = document.getElementById('form'),
    cover = document.getElementById('cover'),
    team1 = document.querySelector('#team1 .captain'),
    team2 = document.querySelector('#team2 .captain'),
    team1mem = document.querySelector('#team1 .members'),
    team2mem = document.querySelector('#team2 .members'),
    counterspan = document.getElementById('counter'),
    exclude_me = [];
teams.style.display = 'none';
options.style.display = 'none';
counterspan.style.display = 'none';
var counter = 1;

submit.addEventListener('click', function(){
    counter = 1;
    counterspan.style.display = 'none';
    generate();
});
regenerate.addEventListener('click', function(){
    counter++;
    counterspan.style.display = 'inline';
    counterspan.innerHTML = ' ['+counter+']';
    generate();
});
editparticipants.addEventListener('click', function(){
    form.style.display = 'block';
    teams.style.display = 'none';
    options.style.display = 'none';
});

cover.addEventListener('click', function(){
    cover.style.display = 'none';
});

function generate(){
    
    var p = participants.value.replace(/\n*\n/g,'\n');
    var plist = p.split('\n');

    if(plist.length > 1) {

        for(var a = 0; a < plist.length; a++) {
            if(plist[a][0]=='-') {
                plist[a] = plist[a].replace(/^-(.+)/, '$1');
                exclude_me.push(plist[a]);
            }
        }
        form.style.display = 'none';

        var t1cap, t2cap, t1=[],t2=[], t=true, temp1, temp2;
        while(plist.length>0) {
            var n = Math.floor(Math.random() *plist.length);
            if(t)
                t1.push((plist.splice(n, 1))[0]);
            else
                t2.push((plist.splice(n, 1))[0]);
            t=!t;
        }
        
        temp1 = t1.filter(m => !exclude_me.includes(m));
        temp2 = t2.filter(m => !exclude_me.includes(m));

        if(temp1.length==0) {
            t1cap = t1[Math.floor(Math.random() *t1.length)];
        }
        else {
            t1cap = temp1[Math.floor(Math.random() *temp1.length)];
        }

        if(temp2.length==0) {
            t2cap = t2[Math.floor(Math.random() *t2.length)];
        }
        else {
            t2cap = temp2[Math.floor(Math.random() *temp2.length)];
        }

        team1.innerHTML = t1cap;
        team2.innerHTML = t2cap;

        team1mem.innerHTML = '<div><strong>'+t1cap+'</strong></div>';
        team2mem.innerHTML = '<div><strong>'+t2cap+'</strong><br></div>';
        for(var i = 0; i<t1.length; i++) {
            if(t1[i]!=t1cap) {
                team1mem.innerHTML+='<div>'+t1[i]+'</div>';
            }
        }
        for(var i = 0; i<t2.length; i++) {
            if(t2[i]!=t2cap) {
                team2mem.innerHTML+='<div>'+t2[i]+'</div>';
            }
        }
        teams.style.display = 'flex';
        options.style.display = 'block';
    }
}

