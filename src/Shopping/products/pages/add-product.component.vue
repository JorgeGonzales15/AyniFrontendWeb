<template>
  <div class="container flex flex-column align-items-center  gap-3 text-white p-3">

    <div class="form-container bg-black-alpha-50 py-3 px-4  border-round-xl shadow-6">
      <h2 class="text-center">Ingrese los datos de la nueva planta</h2>
      <form class="form flex text-sm align-items-center">

        <div class="form-text flex flex-column gap-3 px-3">
          <div class="form-group">
            <label for="plantName">Nombre de la Planta:</label>
            <input id="plantName" class="input" placeholder="Ingrese el nombre aquí" required
                   type="text">
          </div>
          <div class="form-group">

            <label  for="plantDistance">Distancia:</label>
            <input id="plantDistance"  class="input"
                   placeholder="Ingrese la distancia entre cultivos aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantDepth">Profundidad:</label>
            <input id="plantDepth" class="input"
                   placeholder="Ingrese la profundidad del cultivo aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantClimate">Clima:</label>
            <input id="plantClimate"  class="input"
                   placeholder="Ingrese el clima adecuado de la planta aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantSoilType">Tipo de tierra:</label>
            <input id="plantSoilType"  class="input"
                   placeholder="Ingrese el tipo de tierra adecuado para la planta aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantSeason">Temporada:</label>
            <input id="plantSeason" class="input"
                   placeholder="Ingrese la temporada adecuada para la planta aquí"
                   required type="text">
          </div>
        </div>

        <div class=" form-image flex flex-column align-items-center gap-3 px-3">
          <label class="cursor-pointer" for="plantImage">Imagen de la Planta:</label>
          <input id="plantImage" class="hidden" type="file" >
          </div>

      </form>
    </div>

  </div>
</template>