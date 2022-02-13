let towers;


class Hanoi {
    constructor (num) {
        this.torres = new Array(num);
        
        this.selected = 0;
        
        for (let i = 0; i < num; i++)
        this.torres[i] = 0;
    }
    
    static desplazamiento(torre, w) {
        if (torre == 0 )
        return 150;
        if (torre == 1)
        return (width - w)/2;
        if (torre == 2)
        return width - 150 - w;
    }
    
    display () {
        let palo = {
            w: 20, 
            h: -420,
            color: 255
        },
        disco = {
            h: 20,
            w: palo.w + 2,
            r: 255,
            g: 0,
            b: 0,
            pintao: [0, 0, 0]
        },
        selector = {
            w: palo.w,
            h: palo.w,
            y: 25,
            r: 0,
            g: 255,
            b: 0
        };
        
        
        background(0);
        fill(palo.color);
        
        for (let i = 0; i < 3; i++)
        rect(Hanoi.desplazamiento(i, palo.w), height, palo.w, palo.h);
        
        for (let i = this.torres.length - 1; i >= 0; i--) {
            const w = disco.w * (i + 1);
            const h = height - (disco.pintao[this.torres[i]] * disco.h);
            
            
            fill(disco.r, disco.g, disco.w);
            rect(Hanoi.desplazamiento(this.torres[i], palo.w) + palo.w/2 - (w/2), h, w, disco.h * -1);
            disco.pintao[this.torres[i]]++;
        }
        
        if (this.selected >= 0) {
            fill(selector.r, selector.g, selector.b);
            rect(Hanoi.desplazamiento(this.selected, palo.w), selector.y , selector.w, selector.h);
        }
    }
    
    select (tower) {
        if (tower >= 0 && tower <= 2 && Number.isInteger(tower))
            this.selected = tower;
        
        if (tower == "Left") {
            if (this.selected > 0) 
                this.selected--;
            else 
                this.selected = 2;
        }
        
        if (tower == "Right") {
            if (this.selected < 2)
                this.selected++;
            else
                this.selected = 0;
        }
    }
    
    move (from, to) {
        if (arguments.length == 1) {
            to = from;
            from = this.selected;
        }
        
        if (from == to) {
            return;
        }
        
        for (let i = 0; i < this.torres.length; i++) {
            //bigger disk on small disk
            if (this.torres[i] == to) {
                return;
            }
            
            if (this.torres[i] == from) {
                this.torres[i] = to;
                return;
            }
        }
    }
}

function setup() {
    createCanvas(1000, 500);
    reset("Setup");
}

function draw() {
    towers.display();
}

function reset() {
    if (arguments.length == 0)
        delete towers.Hanoi;

    let discos = document.getElementById("discos").value;

    towers = new Hanoi(discos);
    
    document.getElementById("cantidadDiscos").innerHTML = discos;
}

document.addEventListener('keydown', key => {
    if (key.code.substring(0, 5) == "Digit") {
        let digit = parseInt(key.code.substring(5, 6));

        if (digit >= 1 && digit <= 3)
            towers.move(digit - 1);
    }

    if (key.code.substring(0, 5) == "Arrow") {
        towers.select(key.code.substring(5, key.code.length))
    }
});