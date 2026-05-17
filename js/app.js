const tamagotchi = {
    nombre: "Lovelitchi",
    felicidad: 1,
    salud: 1,
    limpieza: 1,
    energia: 1,
    personalidad: "Le gusta comer y jugar"
};

const game = {
    render() {
        const container = document.getElementById('stats-container');
        document.getElementById('pet-name').innerText = tamagotchi.nombre;
                    
        const stats = [
            { key: 'felicidad', label: 'FELICIDAD' },
            { key: 'salud', label: 'SALUD' },
            { key: 'limpieza', label: 'LIMPIEZA' },
            { key: 'energia', label: 'ENERGIA' }
        ];

        const iconMap = {
            felicidad: "🥳",
            salud: "❤️",
            limpieza: "🧼",
            energia: "🌙"
        };

        container.innerHTML = stats.map(s => {
            const currentIcon = iconMap[s.key];

                return `
                    <div class="stat-row flex flex-row flex-wrap justify-between items-start w-full py-2.5 border-b border-stone-200/40 select-none gap-2">          
                        <span class="text-[16px] sm:text-[20px] font-medium text-stone-800 shrink-0 mt-0.5">${s.label}:</span>            
                        <span class="stars flex-1 text-lg sm:text-2xl tracking-normal text-right wrap-break-word ">
                           ${currentIcon.repeat(tamagotchi[s.key])}</span>           
                    </div>
            `;
        }).join('');
    },

    clamp(value) {
        return Math.max(0, Math.min(15, value));
    }, 

    alimentar() {
        tamagotchi.felicidad = this.clamp(tamagotchi.felicidad + 2);
        tamagotchi.salud = this.clamp(tamagotchi.salud + 3);
        tamagotchi.limpieza = this.clamp(tamagotchi.limpieza - 2);
        tamagotchi.energia = this.clamp(tamagotchi.energia + 3);
        this.render();
    },

    jugar() {
        tamagotchi.felicidad = this.clamp(tamagotchi.felicidad + 2);
        tamagotchi.salud = this.clamp(tamagotchi.salud + 1);
        tamagotchi.limpieza = this.clamp(tamagotchi.limpieza - 3);
        tamagotchi.energia = this.clamp(tamagotchi.energia + 3);
        this.render();
    },

    duchar() {
        tamagotchi.limpieza = 10;
        tamagotchi.felicidad = this.clamp(tamagotchi.felicidad - 1);
        this.render();
    },

    dormir() {
        tamagotchi.energia = 10;
        tamagotchi.felicidad = this.clamp(tamagotchi.felicidad - 3); 
        this.render();
    },

    reprender() {
        tamagotchi.felicidad = this.clamp(tamagotchi.felicidad - 2);
        this.render();
    },

    acariciar() {
        tamagotchi.felicidad = this.clamp(tamagotchi.felicidad + 3);
        this.render();
    }
};
  
game.render();








