import pickle
import numpy as np

print("--- model.pkl contents ---")
with open("model.pkl", "rb") as f:
    model = pickle.load(f)
for i, item in enumerate(model):
    print(f"[{i}]: {repr(item)}")

print()
print("--- scaler.pkl contents ---")
with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f)
for i, item in enumerate(scaler):
    print(f"[{i}]: {repr(item)}")
