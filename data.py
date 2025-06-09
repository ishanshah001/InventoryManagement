import random
from decimal import Decimal, ROUND_HALF_UP
from pymongo import MongoClient

MONGODB_URI = "mongodb://localhost:27017"
DB_NAME = "diamond_inventory"  # no spaces!
COLLECTION = "diamond"
NUM_RECORDS = 100

# Lowercase versions of your categories
CUTS = ["ideal", "premium", "very good", "good", "fair"]
COLORS = ["d", "e", "f", "g", "h", "i", "j"]
CLARITIES = ["if", "vvs1", "vvs2", "vs1", "vs2", "si1", "si2", "i1"]
SHAPES = ["round", "princess", "cushion", "oval", "emerald", "pear",
          "marquise", "radiant"]
CERTS = ["gia", "igi", "ags", "hrd", "egl"]

def rand_carat(min_carat=0.30, max_carat=5.00) -> float:
    value = random.uniform(min_carat, max_carat)
    return float(Decimal(value).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP))

def rand_price(carat: float) -> int:
    base = random.randint(500, 2500)
    premium = random.uniform(3000, 6000)
    return int(base + (carat ** 1.6) * premium)

def make_diamond_doc() -> dict:
    carat = rand_carat()
    return {
        "carat": carat,
        "cut": random.choice(CUTS),
        "color": random.choice(COLORS),
        "clarity": random.choice(CLARITIES),
        "price": rand_price(carat),
        "shape": random.choice(SHAPES),
        "certification": random.choice(CERTS),
    }

def main():
    client = MongoClient(MONGODB_URI)
    db = client[DB_NAME]
    col = db[COLLECTION]

    # DELETE all existing documents
    delete_result = col.delete_many({})
    print(f"Deleted {delete_result.deleted_count} documents.")

    # Insert new lowercase records
    docs = [make_diamond_doc() for _ in range(NUM_RECORDS)]
    insert_result = col.insert_many(docs)
    print(f"Inserted {len(insert_result.inserted_ids)} new documents.")

if __name__ == "__main__":
    main()
