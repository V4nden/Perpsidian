import sys
from perplexity import Perplexity

perplexity = Perplexity()

finalAnswer = None
finalObject = None

for response in perplexity.search(sys.argv[1]):
    finalAnswer = response["answer"]
    finalObject = response

if sys.argv[2].lower() == "true":
    finalAnswer += "\n"*2
    for link in finalObject["web_results"]:
        finalAnswer += f"[{link["name"]}]({link["url"]})\n"
    print(finalAnswer)
else :
    print(finalAnswer)

perplexity.close()
sys.stdout.flush()
