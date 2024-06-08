import AppConfig from '../core/config';

const fetchTest = async () => {
    const url = `${AppConfig.api_base_url}/test/me`;

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
    });

    return response;
}

const fetchImageUrl = async (imgUrl) => {
    const url = `${AppConfig.ai_base_url}/test`;
    console.log(imgUrl)
    const response = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'image_url': imgUrl,
        })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json(); // 응답을 JSON으로 파싱
    return data;
}

const fetchGetDisease = async (label) => {
    const url = `${AppConfig.api_base_url}/disease/label`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: `${label}`,
    });

    const data = await response.json(); // 응답을 JSON으로 파싱
    return data;
}

export { fetchTest, fetchImageUrl, fetchGetDisease };