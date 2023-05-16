<template>
    <div class="min-h-screen py-16 flex flex-col justify-center align-center items-center">
        <div >
            <h1 class="text-4xl font-cursive">Dukun Lomba</h1>
        </div>
        <div class="form-control w-1/2">
            <label class="label">
                <span class="font-primary label-text text-white">Upload poster</span>
            </label>
            <input 
                type="file" 
                class="w-1/2font-secondary file-input file-input-bordered" 
                accept="image/png, image/jpeg"
                @change="onFileChange($event, `comp_${competitions.length}`)"
            />
            
        </div>
        <div class="flex flex-row flex-wrap">
            <div
                class="w-1/4 p-10 flex flex-col items-center"
                v-if="competitions.length > 0" 
                v-for="competition, i in competitions"
                :key="`comp_${i}`"
            >
                <figure>
                    <img class="object-contain h-64" :src="competitions[i].poster"/>
                </figure>
                <h2 class="font-primary text-xl text-center">{{ competitions[i].name }}</h2>
                <p class="font-secondary text-md text-justify">{{ competitions[i].content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const competitions: any = accessCompetitions();

const onFileChange = async (e: any, name: string) => {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length) {
        return;
    }

    var file = files[0];

    if (!file.type.match('image.*')) {
        alert('Please upload an image.')
        return false;
    };
    
    const imgURL: any = await convertFile(file);
    const imgText: any = await posterRecognition(imgURL); 

    competitions.value.push({
        name: name,
        poster: imgURL,
        content: imgText
    })
}
</script>