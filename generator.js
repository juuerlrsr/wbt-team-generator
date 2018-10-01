var teams = document.getElementById('teams'),
    participants = document.getElementById('participants'),
    submit = document.getElementById('submit'),
    regenerate = document.getElementById('regenerate'),
    editparticipants = document.getElementById('editparticipants'),
    form = document.getElementById('form'),
    cover = document.getElementById('cover'),
    team1 = document.querySelector('#team1 .captain'),
    team2 = document.querySelector('#team2 .captain'),
    team1mem = document.querySelector('#team1 .members'),
    team2mem = document.querySelector('#team2 .members');
teams.style.display = 'none';

submit.addEventListener('click', generate);
regenerate.addEventListener('click', generate);
editparticipants.addEventListener('click', function(){
    form.style.display = 'block';
    teams.style.display = 'none';
});

cover.addEventListener('click', function(){
    cover.style.display = 'none';
});

function generate(){
    
    var p = participants.value.replace(/\n*\n/g,'\n');
    var plist = p.split('\n');

    if(plist.length > 1) {
        form.style.display = 'none';

        var t1cap, t2cap, t1=[],t2=[], t=true;
        while(plist.length>0) {
            var n = Math.floor(Math.random() *plist.length);
            if(t)
                t1.push((plist.splice(n, 1))[0]);
            else
                t2.push((plist.splice(n, 1))[0]);
            t=!t;
        }
        t1cap = t1[Math.floor(Math.random() *t1.length)];
        t2cap = t2[Math.floor(Math.random() *t2.length)];

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
        teams.style.display = 'block';
    }
}

