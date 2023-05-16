import { createWorker, PSM, OEM } from "tesseract.js";

export const posterRecognition = async (
    imgURL: string
) => {
    const worker: any = await createWorker({
        logger: (m) => console.log(m),
    });

    console.log(imgURL);
    await worker.load();
    await worker.loadLanguage('ind');
    await worker.initialize('ind', OEM.DEFAULT);
    await worker.setParameters({
        tessedit_pageseg_mode: PSM.SINGLE_BLOCK_VERT_TEXT,
    });
    const { data: { text } } = await worker.recognize(imgURL);
    console.log(text);
    return text;
};