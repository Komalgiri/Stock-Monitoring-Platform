import requests
from django.http import JsonResponse

def get_stock_price(symbol):
    api_key = 'FM89640R0U5WH89J'
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=5min&apikey={api_key}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
        
        data = response.json()
        if 'Time Series (5min)' in data:
            latest_data = data['Time Series (5min)']
            latest_timestamp = list(latest_data.keys())[0]
            latest_price = latest_data[latest_timestamp]['4. close']
            return latest_price
        else:
            raise KeyError('Time Series (5min) not found in response data')
    
    except requests.exceptions.RequestException as e:
        return None  # Handle connection errors or timeouts
    except (KeyError, IndexError) as e:
        return None  # Handle missing or malformed data
    except Exception as e:
        return None  # Handle other unexpected errors
