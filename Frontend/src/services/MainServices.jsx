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
    const url = AppConfig.ai_base_url;

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            "image_url": imgUrl,
        },
    });

    return response;
}

export { fetchTest, fetchImageUrl };