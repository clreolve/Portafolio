# card template

```javascript
let template = `<div class="poke-card-exibition col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
                      src="./card.html?id=${c.id}">
                      <img src="${getImageURL(c.image)}" 
                          class="rounded mx-auto d-block" 
                          alt="${c.name}"
                          width="100%">
                    </div>`;
```

