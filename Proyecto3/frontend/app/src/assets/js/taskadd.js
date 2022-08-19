
window.onload = () => {
    let $ = selector => document.querySelector(selector);
    let $all = selector => document.querySelectorAll(selector);

    $steps = $('#steps');
    $stepbt = $('#stepbt'); //boton añadir paso
    $stepbtrm = $('#stepbtrm'); //boton eliminar paso

    let stepcounter = 0;
    $stepbt.addEventListener("click", ()=> {
        let template = `
        <div id="divstep${stepcounter}" class="py-1">
        <label for="step${stepcounter}" class="form-label">
            Paso ${stepcounter}
        </label>
            <input
              type="text"
              class="form-control"
              id="step${stepcounter}"
            />
        </div>
        `;
        $steps.innerHTML += template;
        stepcounter++;
    });

    $stepbtrm.addEventListener("click", ()=> {
        if(stepcounter > 0){
            let victim = $(`#divstep${stepcounter-1}`);
            if(victim != null){
                victim.remove();
                stepcounter--;
            }
        }
    });

}