<template>
    <div id="app">
        <h1>Ola Vue, i'm here</h1>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/roboto-mono-thin.ttf");
}

* {
    font-family: "RobotoMono" monospace;
}
body {
    margin: 0;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73))
}

</style>