myApp.service('profileService' , function () {
    this.getProfiles = function () {
        return profiles;
    };

    this.insertUser = function (name, team, skills, city) {
        var topID = profiles.length + 1;
        profiles.push({
            id: topID,
            name: name,
            skills: skills,
            team: team,
            city: city
        });
    };

    this.updateUser = function (id, name, team, skills, city) {
        for (var i = 0; i < profiles.length; i++) {
            if (id === profiles[i].id) {
                profiles[i].name = name;
                profiles[i].team = team;
                profiles[i].skills = skills;
                profiles[i].city = city;
                break;

            }
        }
    };

    this.deleteUser = function (id) {

        for (var i = profiles.length - 1 ; i >= 0 ; i--) {
            if(profiles[i].id === id){
                profiles.splice(i, 1);
                break;
            }
        }
    };

    this.getUserProfile = function (id) {
        for (var i = 0 ; i < profiles.length ; i++){
            if(profiles[i].id === id){
                return profiles[i];
            }
        }
        return null;
    }

    var profiles = [
        {cId:0, name:'Batman', skills:['Detective, Strategic, Martial Arts, Ninja'], team: 'Justice League', city: 'Gotham'},
        {cId:1, name:'Superman', skills:['Super Strength, Super Intellect'], team: 'Justice League', city: 'Metropolis'},
        {cId:2, name:'Ironman', skills:['CS, Combat Skills, Strategic'], team: 'Avengers', city: 'New York'},
        {cId:3, name:'SpcIderman', skills:['Agility, Web, Super Strength'], team: 'Avengers', city: 'New York'},
        {cId:4, name:'Flash', skills:['Super Speed, Super Healing'], team: 'Justice League', city: 'Central City'},
        {cId:4, name:'Priya', skills:['Super Talkative, Super Driving :P'], team: 'UI Team', city: 'Pune'}
    ];

})