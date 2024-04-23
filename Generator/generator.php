<?php

$url = "https://1password.com/password-generator/";
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$res = curl_exec($curl);
curl_close($curl);

echo $res;

?>

<script>
    function refresh() {
        document.querySelector(`
            #refresh-token
        `).click();
    }


    function token() {
    return document.querySelector(`
        #password-generator-display-overlay
    `).innerText;
    }

    function tokenList(num) {
    let out = [];
    let i = 0;
    do {
        refresh();
        out.push(
            token()
        );
        i++;
    } while (i < num)
    return out;
    }

    function control(l) {
    let lC = new Set(l);
    console.log(lC.size);
    if (lC.size == l.length)
        return true;
    return false;
    }

    function run() {
    let l = tokenList(600);
    if (control(l)) {
        console.log(
            l.join("\n")
        );
    } else {
        console.log("fuck!");
    }
    }

    run();
</script>

