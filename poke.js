async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        // Extract info
        const name = data.name;
        const sprite = data.sprites.front_default;
        const types = data.types.map(t => t.type.name).join(", ");
        const abilities = data.abilities.map(a => a.ability.name).join(", ");
        const baseExp = data.base_experience;

        // Update DOM
        document.getElementById("name").textContent = name.charAt(0).toUpperCase() + name.slice(1);
        document.getElementById("pokemonSprite").src = sprite;
        document.getElementById("types").textContent = types;
        document.getElementById("abilities").textContent = abilities;
        document.getElementById("baseExp").textContent = baseExp;

        document.getElementById("pokemonInfo").style.display = "block";
    } catch (error) {
        console.error(error);
        alert("Pokémon not found. Please check the name and try again.");
        document.getElementById("pokemonInfo").style.display = "none";
    }
}
