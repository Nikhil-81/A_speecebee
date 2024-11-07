
let block_slider=document.getElementsByClassName('block_slider')[0]
let block_Speakerspopover_image=document.getElementsByClassName('block_Speakerspopover_image')[0]
let block_Speakerspopover=document.getElementsByClassName('block_Speakerspopover')[0]
let block_Speakerspopover_bio_name=document.getElementsByClassName('block_Speakerspopover_bio_name')[0]
let block_Speakerspopover_bio_des=document.getElementsByClassName('block_Speakerspopover_bio_des')[0]
let block_Speakerspopover_bio_comp=document.getElementsByClassName('block_Speakerspopover_bio_comp')[0]
let block_Speakerspopover_des=document.getElementsByClassName('block_Speakerspopover_des')[0]
let block_Speakerspopover_close=document.getElementsByClassName('block_Speakerspopover_close')[0]



Map_spikers_data()

function Map_spikers_data(){   
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) =>hendledataMap(data) )
    .catch(err=>hendleError(err))
}


function hendleError(err){
    console.log(err)
    alert('error while showing Speakers')
}

function hendledataMap(data){
    data?.map(el=>{
        let frame=document.createElement('div')
        let speker_image=document.createElement('img')
        let speker_name=document.createElement('h3')
        let speker_des=document.createElement('p')
        let speker_comp=document.createElement('p')

        
        speker_image.setAttribute('src',el?.image)
        speker_name.textContent=el?.name
        speker_des.textContent=el?.designation
        speker_comp.textContent=el?.company

        
        frame.setAttribute('class','block_slider_fram')
        speker_name.setAttribute('class','fram_name')
        speker_des.setAttribute('class','fram_des')
        speker_comp.setAttribute('class','fram_comp')


        frame.addEventListener('click',()=>{
            hendleFrameClick(el)
        })

        speker_image.setAttribute('class','frame_image')

        frame.appendChild(speker_image)
        frame.appendChild(speker_name)
        frame.appendChild(speker_des)
        frame.appendChild(speker_comp)

        block_slider.appendChild(frame)
    })
}
// block_Speakerspopover
function hendleFrameClick(el){
    let a=block_Speakerspopover?.classList
    let x=[...a]

    if(x.includes('block_Speakerspopover-hidden')){
        a?.remove('block_Speakerspopover-hidden')
        a?.add('block_Speakerspopover-show')
        block_Speakerspopover_image.setAttribute('src',el?.image)
        block_Speakerspopover_bio_name.textContent=el?.name
        block_Speakerspopover_bio_des.textContent=el?.designation
        block_Speakerspopover_bio_comp.textContent=el?.company
        block_Speakerspopover_des.textContent=el?.des
    }
    else{
        block_Speakerspopover_image.setAttribute('src',el?.image)
        block_Speakerspopover_bio_name.textContent=el?.name
        block_Speakerspopover_bio_des.textContent=el?.designation
        block_Speakerspopover_bio_comp.textContent=el?.company
        block_Speakerspopover_des.textContent=el?.des
    }
}


block_Speakerspopover_close.addEventListener('click',()=>{
    let a=block_Speakerspopover?.classList
    let x=[...a]
    if(x.includes('block_Speakerspopover-show')){
        a?.remove('block_Speakerspopover-show')
        a?.add('block_Speakerspopover-hidden')
    }
})