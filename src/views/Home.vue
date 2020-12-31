<template>
    <div id="home">
        <br />
        <img class="imgprofile" :src="require(`../assets/profile.png`)">
        <h1 class="fontstyle linespce" style="font-size:80px; margin-top:-10px;">Mr.Methawi Phokhai</h1>
        <h2 class="fontstyle linespce" style="font-size:60px; margin-top:-70px">Web Developer</h2>
        <br />
        <div style="margin-top:-50px;">
            <a href="https://github.com/phokhai"><img class="imgicon" :src="require(`../assets/github.svg`)"></a>&emsp;&emsp;
            <a href="https://www.linkedin.com/in/methawiphokhai"><img class="imgicon" :src="require(`../assets/linkedin.png`)"></a>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque&display=swap');

.imgprofile {
    width: 240px;
    height: 250px;
    border-radius: 50%;
}

.imgicon {
    width: 40px;
    height: 40px;
}

.fontstyle {
    font-family: 'Darker Grotesque', sans-serif;
}

</style>
